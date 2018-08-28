import { AbstractControl } from '@angular/forms';

export class ValidateCountry {
    static createValidator(countryList: string[]) {
        return (control: AbstractControl) => {
            let country = control.value;
            if (country != undefined && country != null&&country!='') {
                if (countryList.indexOf(country) < 0)
                    return { validCountry: true };
            }
            return null;
        };
    }
}
