import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noSpace(control: AbstractControl): ValidationErrors | null {
  if (control.value != null && control.value.indexOf(' ') != -1) {
    return { noSpace: true };
  } else {
    return null;
  }
}
