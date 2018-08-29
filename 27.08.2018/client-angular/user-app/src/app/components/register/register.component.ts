import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { User, ValidateId, ValidateCountry,ValidateIsMale, UserService, CountryService } from '../../imports';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  countries: string[] = [];
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private countryService: CountryService) { }
  
  ngOnInit() {
    this.countryService.getAllCountries()
      .subscribe(
        res => {
          this.countries = res;
          this.registerForm = this.createForm();
        },
        err => console.log(err));    

  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.user = JSON.parse(JSON.stringify(this.registerForm.value));
      console.warn(this.user);
      this.userService.addUser(this.user);
      this.registerForm = this.createForm();
      this.reset();
      this.submitted = false;
    }
  }
  createForm(): FormGroup {
    return this.formBuilder.group({
      id: ['', ValidateId],
      name: [''],
      age: [''],
      isMale: [undefined,ValidateIsMale],
      country: ['',ValidateCountry.createValidator(this.countries)]
    });
  }
  reset() {
    for (let name in this.registerForm.controls) {
      this.registerForm.controls[name].setValue('');
      this.registerForm.controls[name].setErrors(null);
    }
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
