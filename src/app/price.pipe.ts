import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "price",
  pure: false
})

export class PricePipe implements PipeTransform {

  transform(input: Keg[]){
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].price <= 5) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
