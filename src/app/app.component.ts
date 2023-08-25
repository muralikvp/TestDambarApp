import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestDambarApp';
  displaymenu = false;
  constructor(private route:Router){}
  ngOnInit(){}

  ngDoCheck(){
      if(this.route.url == "/TestLogin"){
        this.displaymenu = false;
      }
      else
      {
        this.displaymenu = true;
      }
  }
  logOut()
  {
    localStorage.clear();
    this.route.navigate(['TestLogin']);
  }
}
