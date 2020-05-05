import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const APP_ROUTES: Routes = [
  { path: 'user/:id', component: UserDetailComponent },
  { path: '**', pathMatch: 'full', component: UsersComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
