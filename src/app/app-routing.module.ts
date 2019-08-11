import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/shared/login/login.component';
import {GroupChatComponent} from './group-chat/group-chat.component';
import {AuthGuard} from './auth.guard';
import {LogoutComponent} from './components/shared/logout/logout.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'chat', component: GroupChatComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
