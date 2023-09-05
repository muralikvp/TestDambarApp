import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() ChildReceiver!:string;

  @Input() BrandName!:string;

  @Input() Training!:string;

  @Output() newItemEvent= new EventEmitter<string>();

  addNewItem(value:string){

    this.newItemEvent.emit(value);

  }
}
