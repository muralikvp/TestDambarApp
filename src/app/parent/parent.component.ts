import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
name = "Dambar";
name1:any;
brand:string="";
trainingName :string ="";
TrainingProvider:string="";

constructor(private route:Router)
{
  this.name1 = "Murali";
  this.brand = "Hope Tutors";
  this.trainingName = "Angular + .Net Core";
}

logOut(){
  localStorage.clear();
  this.route.navigate(['TestLogin']);
}

addTraining(newItem:string){
  this.TrainingProvider = newItem;
}

}
