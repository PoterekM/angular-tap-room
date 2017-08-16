import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "price",
  pure: false
})

export class PricePipe implements PipeTransform {

  transform(input: Keg[], desiredPriceRange){
    var output: Keg[] = [];
    if (desiredPriceRange==="cheap") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price <= 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPriceRange==="moderate") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price > 3 && input[i].price <= 6) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPriceRange==="expensive") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price >= 7) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
