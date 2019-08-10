import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/shared/top-bar/top-bar.component';
import { FooterBarComponent } from './components/shared/footer-bar/footer-bar.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { MainComponent } from './components/shared/main/main.component';
import { LoginComponent } from './components/shared/login/login.component';
import { SearchComponent } from './components/shared/search/search.component';
import { UserComponent } from './components/core/user/user.component';
import { MessageComponent } from './components/core/message/message.component';
import { SendComponent } from './components/shared/send/send.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { LogoutComponent } from './components/shared/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterBarComponent,
    SideBarComponent,
    MainComponent,
    LoginComponent,
    SearchComponent,
    UserComponent,
    MessageComponent,
    SendComponent,
    GroupChatComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
