import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private snack: MatSnackBar){}

  btnClick(){
    console.log("btn click");
    this.snack.open("Welcome to this App", "Cancel")
  }

}
