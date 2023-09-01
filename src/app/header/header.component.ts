import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  displaymenu = false;

  constructor(private route:Router){}
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
