//models
export{User} from './shared/models/user.model';

//services
export{UserService} from './shared/serveices/user.service';
export{CountryService} from './shared/serveices/country.service';

//validators
export {ValidateId} from './shared/validators/id.validator';
export {ValidateCountry} from './shared/validators/country.validator';
export {ValidateIsMale} from './shared/validators/is-male.validator';


//components
export { AppComponent } from './app.component';
export { RegisterComponent } from './components/register/register.component';
export { UserListComponent } from './components/user-list/user-list.component';
