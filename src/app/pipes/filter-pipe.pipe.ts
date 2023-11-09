import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { CarDetail } from '../models/car-detail';
import { Brand } from '../models/brand';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:CarDetail)=>(c.carName + " " + c.brandName + " " + c.colorName + " " + c.modelYear + " ").toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }





}
