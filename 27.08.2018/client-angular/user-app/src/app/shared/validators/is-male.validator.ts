import { AbstractControl } from '@angular/forms';

export function ValidateIsMale(control: AbstractControl) {

    let isMale = control.value;
    if (isMale == undefined || isMale == null) {
    
            return { validIsMale: true };
    }
    return null;
}
