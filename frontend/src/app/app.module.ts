import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

//Rutas
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [AppComponent, UsersComponent, UserDetailComponent],
  imports: [BrowserModule, HttpClientModule, NgxPaginationModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
