import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  data={
    to: "",
    subject:"",
    message:""
  }
  flag:boolean=false;

  constructor(private email:EmailService, private snack:MatSnackBar){}
  
  doSubmitForm(){
    console.log("Try to submit your form");
    console.log("Data ", this.data);
    if(this.data.to=='' || this.data.subject=='' || this.data.message==''){
      this.snack.open("Fields can't be empty !!", "OK");
      return;

    }
    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      Response=>{
        console.log(Response);
        this.flag=false;
        this.snack.open("Sent success", "OK")
    },
    error=>{
      console.log(error);
      this.flag=false;
      this.snack.open("Error", "OK")
    }
    )
  }

}
