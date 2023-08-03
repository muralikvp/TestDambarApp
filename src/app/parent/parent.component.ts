import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
name = "Dambar";
name1:any;

constructor()
{
  this.name1 = "Murali";
}

}
