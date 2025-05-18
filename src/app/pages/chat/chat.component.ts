import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: ChatMessage[] = [];
  newMessage: string = '';
  loading: boolean = false;

  @ViewChild('scrollMe') private chatContainer!: ElementRef;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.api.getChatHistory().subscribe({
      next: (res) => {
        this.messages = res.map((msg: any) => ({
          sender: msg.role === 'assistant' ? 'bot' : 'user',
          text: msg.content,
          timestamp: new Date(msg.timestamp)
        }));
        setTimeout(() => this.scrollToBottom(), 100);
      },
      error: (err) => {
        console.error('Error loading chat history:', err);
      }
    });
  }

  sendMessage(): void {
    const content = this.newMessage.trim();
    if (!content) return;

    const userMsg: ChatMessage = {
      sender: 'user',
      text: content,
      timestamp: new Date()
    };
    this.messages.push(userMsg);
    this.newMessage = '';
    this.scrollToBottom();

    this.loading = true;
    this.api.sendMessageToBot(content).subscribe({
      next: (res) => {
        const botMsg: ChatMessage = {
          sender: res.role === 'assistant' ? 'bot' : 'user',
          text: res.content,
          timestamp: new Date(res.timestamp)
        };
        this.messages.push(botMsg);
        this.loading = false;
        this.scrollToBottom();
      },
      error: (err) => {
        console.error('Error sending message:', err);
        this.loading = false;
      }
    });
  }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll failed:', err);
    }
  }
}
