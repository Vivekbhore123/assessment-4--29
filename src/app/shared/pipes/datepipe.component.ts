import {Pipe,PipeTransform} from '@angular/core'

 
@Pipe({
    name:'DatePipe'
})
export class DatePipeComponent implements PipeTransform {
    transform(value: any,birthmonth:string):string {

     var res = birthmonth.substring(3,4);

       if(res=="1")
       return "January  "+value;
       else 
       if(res=="2")
       return "February  "+value;
       else
       if(res=="3")
       return "March  "+value;
       else
       if(res=="4")
       return "April  "+value;
       else
       if(res=="5")
       return "May  "+value;
       else
       if(res=="6")
       return "June  "+value;
       else
       if(res=="7")
       return "July  "+value;
       else
       if(res=="8")
       return "August  "+value;
       else
       if(res=="9")
       return "Sept  "+value;
       else
       if(res=="10")
       return "Oct  "+value;
       else
       if(res=="11")
       return "November  "+value;
       else
       return "December "+value;

    }

}