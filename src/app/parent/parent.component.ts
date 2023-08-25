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

constructor(private route:Router)
{
  this.name1 = "Murali";
}

logOut(){
  localStorage.clear();
  this.route.navigate(['TestLogin']);
}

}
