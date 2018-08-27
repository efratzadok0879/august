import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, ValidateId, UserService } from '../../imports';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  countries: string[];
  registerForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.countries = ["Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa"];
    this.registerForm = this.formBuilder.group({
      id: ['', ValidateId],
      name: [],
      age: [],
      isMale: [],
      country: []
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.user = JSON.parse(JSON.stringify(this.registerForm.value));
      console.warn(this.user);
      this.addUser();
    }
  }
  ngOnInit() {
  }
  addUser() {
    this.userService.addUser(this.user).subscribe(res => {
      alert(res);
    },
      err => alert(err));
  }
  get name() {
    return this.registerForm.get('name');
  }
  get id() {
    return this.registerForm.get("id");
  }
  get age() {
    return this.registerForm.get("age");
  }
  get isMale() {
    return this.registerForm.get("isMale");
  }
  get country() {
    return this.registerForm.get("country");
  }



}
