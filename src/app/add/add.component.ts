import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  messageclass: string = '';
  message: string = '';
  customerid: number =0;
  editdata: any;
  responsedata: any;
  Name :string ="";
  Email :string ="";


  constructor(private service: CustomerService, private route: ActivatedRoute) {
    this.customerid = Number(this.route.snapshot.paramMap.get('id'));
    if (this.customerid) {
       this.updateCustomer(this.customerid);
    }
  }

  register = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    phone: new FormControl('', Validators.required),
  });

  SaveCustomer() {
    if (this.register.valid) {
      this.service.saveCustomer(this.register.value).subscribe((result) => {
        console.log(result);
        this.responsedata = result;
        if (this.responsedata.id > 1) {
          this.message = 'Customer Saved Successfully';
          this.messageclass = 'sucess';
          this.service.NewUserMessage = this.responsedata.email + " added sucessfully.";

          this.clearCustomer();
        } else {
          this.message = 'Failed to Save';
          this.messageclass = 'error';
        }
      });
    }
  }

  get name() {
    return this.register.get('name');
  }

  get email() {
    return this.register.get('email');
  }

  updateCustomer(Id: any) {
    this.service.LoadCustomerByCode(Id).subscribe((data) => {
      this.editdata = data;
      this.register = new FormGroup( {
        id: new FormControl(this.editdata.id),
        name: new FormControl(this.editdata.firstName),
        email: new FormControl(this.editdata.email),
        phone: new FormControl(this.editdata.phone)
      });
    });
  }

  clearCustomer(){
      this.register = new FormGroup({
        id:new FormControl(""),
        name: new FormControl(""),
        email: new FormControl(""),
        phone: new FormControl("")
      })
  }
}
