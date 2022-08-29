import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
    selector:'[selectAgeValidate]',
    providers:[
       {
           provide:NG_VALIDATORS,
           useExisting:SelectAgeValidator,
           multi:true
       } 
    ]
})
export class SelectAgeValidator implements Validator{
    validate(control: AbstractControl): {[key: string]: any} | null {
         if(control.value>100 || control.value<1)
         return {'defaultSelected':true}
         else
         return {'defaultSelected':false};
    }

}
