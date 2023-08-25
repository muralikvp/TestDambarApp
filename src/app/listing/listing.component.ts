import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  customerdata:any;
Red: any;
  constructor(private service:CustomerService){}

  ngOnInit():void{
this.LoadCustomer();
  }

  LoadCustomer(){
    this.service.LoadCustomer().subscribe((data) => {
      this.customerdata = data.users;
    })
  }

  delete(ID:any){
    if(confirm("Do you want to Remove?")){
      this.service.RemoveCustomer(ID).subscribe((data) => {
        this.LoadCustomer();
      });
    }
  }
}
