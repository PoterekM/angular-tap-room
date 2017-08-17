import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M&M\'s Taproom';
  masterKegList: Keg[] = [
    new Keg('IPA', 'Laurelwood', 3, 7),
    new Keg('Pale Ale', 'Moon Crest', 4, 9),
    new Keg('Stout', 'Founders', 5, 8),
    new Keg('Rye', 'P.Diddy', 10, 4)
  ];

  selectedKeg = null;

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

  beginHappyHour() {
    this.masterKegList.forEach(function(currentKeg) {
      console.log(currentKeg);
      currentKeg.price -= 1;
    });
  }

  newKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

}
