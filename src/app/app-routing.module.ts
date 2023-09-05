import { RouterModule, Routes } from "@angular/router";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./shared/auth.guard";
import { ListingComponent } from "./listing/listing.component";
import { AddComponent } from "./add/add.component";
import { CustomerComponent } from "./customer/customer.component";
import { TodoComponent } from "./todo/todo.component";
import { PathNotFoundComponent } from "./path-not-found/path-not-found.component";
import { RoleGuard } from "./role.guard";
import { WebWorkerComponent } from "./web-worker/web-worker.component";


const routes:Routes =[
  {path:'',component:ParentComponent,canActivate:[AuthGuard]},
  {path:'child',component:ChildComponent ,canActivate:[AuthGuard]},
  {
    path:'customer',
    component:CustomerComponent,
    children:[
      {path:'',component:ListingComponent},  //localhost:4200/customer/
      {path:'create',component:AddComponent}, //localhost:4200/customer/create
      {path:'Edit/:id',component:AddComponent}, //localhost:4200/customer/Edit/3
      {path:'WebWorker',component:WebWorkerComponent},
      {path:'Todo',component:TodoComponent}
  ],
  canActivate:[AuthGuard,RoleGuard]
  },
  {path:'TestLogin',component:LoginComponent},
  {path:'**',component:PathNotFoundComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}


