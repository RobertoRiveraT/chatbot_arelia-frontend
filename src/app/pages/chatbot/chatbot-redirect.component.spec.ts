import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotRedirectComponent } from './chatbot-redirect.component';

describe('ChatbotRedirectComponent', () => {
  let component: ChatbotRedirectComponent;
  let fixture: ComponentFixture<ChatbotRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotRedirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
