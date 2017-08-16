import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M&M\'s Taproom';
  kegs: Keg[] = [
    new Keg('IPA', 'Laurelwood', 4, 7),
    new Keg('Stout', 'Founders', 5, 8),
    new Keg('Rye', 'P.Diddy', 10, 4)
  ];

  selectedKeg = null;

  priceColor(currentKeg) {
    if (currentKeg.price < 5) {
      return "bg-info";
    } else if (currentKeg.price < 10) {
      return "bg-warning";
    } else {
      return "bg-success";
    }
  }

  sellPint(currentKeg) {
    currentKeg.remainingPints -= 1;
    if (currentKeg.remainingPints <= 10) {
      alert("Only " + currentKeg.remainingPints + " Pints left of " + currentKeg.brand);
    }
  }

  editKeg(currentKeg) {
    this.selectedKeg = currentKeg;
  }

  editComplete() {
    this.selectedKeg = null;
  }

}
