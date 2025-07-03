import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Navegation
import { HomeComponent  } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { MyworkComponent } from './pages/mywork/mywork.component';
import { ContactComponent } from './pages/contact/contact.component';

// Chatbot
import { ChatbotRedirectComponent } from './pages/chatbot/chatbot-redirect.component';
import { LoginComponent } from './pages/chatbot/login/login.component';
import { RegisterComponent } from './pages/chatbot/register/register.component';
import { AccountComponent } from './pages/chatbot/account/account.component';
import { ChatComponent } from './pages/chatbot/chat/chat.component';

// Games
import { UnityPlatformerComponent } from './pages/games/unity-platformer/unity-platformer.component';
import { PenguinTwitchBattleComponent } from './pages/games/penguin-twitch-battle/penguin-twitch-battle.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Navegation
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'mywork', component: MyworkComponent },
  { path: 'contact', component: ContactComponent },
  // Chatbot
  { path: 'chatbot', component: ChatbotRedirectComponent },
  { path: 'chatbot/login', component: LoginComponent },
  { path: 'chatbot/register', component: RegisterComponent },
  { path: 'chatbot/account', component: AccountComponent },
  { path: 'chatbot/chat', component: ChatComponent },
  // Games
  { path: 'games/unity-platformer', component: UnityPlatformerComponent },
  { path: '**', redirectTo: 'home' } // opcional: redirige rutas no válidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
