import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ListingComponent } from './listing/listing.component';
import { TokenInterceptor } from './service/token.interceptor';
import { AddComponent } from './add/add.component';
import { CustomerComponent } from './customer/customer.component';
import { TodoComponent } from './todo/todo.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { SeniorJuniorPipe } from './shared/senior-junior.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    LoginComponent,
    ListingComponent,
    AddComponent,
    CustomerComponent,
    TodoComponent,
    PathNotFoundComponent,
    SeniorJuniorPipe
  ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule,AppRoutingModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
