import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatComponent } from './pages/chatbot/chat/chat.component';
import { RegisterComponent } from './pages/chatbot/register/register.component';
import { AccountComponent } from './pages/account/account.component';
import { HomeComponent  } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { MyworkComponent } from './pages/mywork/mywork.component';
import { ContactComponent } from './pages/contact/contact.component';

import { ChatbotRedirectComponent } from './pages/chatbot/chatbot-redirect.component';
import { LoginComponent } from './pages/chatbot/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'account', component: AccountComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'mywork', component: MyworkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'chatbot', component: ChatbotRedirectComponent },
  { path: 'chatbot/login', component: LoginComponent },
  { path: 'chatbot/register', component: RegisterComponent },
  { path: 'chatbot/chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
