import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  form;
  ngOnInit() {
    this.form = new FormGroup({
      email : new FormControl("", Validators.required),
      password : new FormControl("", Validators.required),
    });
  }
login = function(data){
  console.log(data);
}
}
