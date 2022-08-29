import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
    selector:'[selectPinValidate]',
    providers:[
       {
           provide:NG_VALIDATORS,
           useExisting:SelectPinValidator,
           multi:true
       } 
    ]
})
export class SelectPinValidator implements Validator{
    validate(control: AbstractControl): {[key: string]: any} | null {
         if(control.value==0 || control.value>999999)
         return {'defaultSelected':true}
         else
         return {'defaultSelected':false};
    }

}
