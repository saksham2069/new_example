import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


  export const matchpassword : ValidatorFn = (control: AbstractControl):ValidationErrors|null =>{

     let password = control.get('password');
     let confirmpassword = control.get('repassword');
     if(password && confirmpassword && password?.value !== confirmpassword?.value){
      confirmpassword.setErrors({ passwordMismatch: true });
        return {
            passwordmatcherror : true }
     }
    return null;
   }