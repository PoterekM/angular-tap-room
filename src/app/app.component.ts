import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M&M\'s Brewing';
  masterKegList: Keg[] = [
    new Keg('IPA', 'Laurelwood', 5, 7),
    new Keg('Pale Ale', 'Moon Crest', 4, 9),
    new Keg('Stout', 'Founders', 5, 8),
    new Keg('Rye', 'P.Diddy', 10, 4),
    new Keg('Workhorse', 'Laurelwood', 6, 7.5),
    new Keg('Two Hearted', 'Bell\'s', 8, 7),
    new Keg('Red\'s Rye', 'Founders', 10, 3),
    new Keg('PBR', 'USA', 3, 5),
    // currentTime = new Date(),
  ];

  currentTime = null;
  selectedKeg = null;

  sellPint(currentKeg) {
    currentKeg.remainingPints -= 1;
    if (currentKeg.remainingPints === 0) {
    currentKeg.name = currentKeg.name + " is sold out!";
  } else if (currentKeg.remainingPints === -1) {
    currentKeg.remainingPints += 1;
    } else if (currentKeg.remainingPints <= 10) {
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
      currentKeg.price -= 1;
    });
  }

  endHappyHour() {
    this.masterKegList.forEach(function(currentKeg) {
      currentKeg.price+= 1;
    });
  }

  newKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

}
