import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';

@Component({
  selector: 'new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent implements OnInit {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, abv: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, abv);
    this.newKegSender.emit(newKegToAdd);
  }

  addingKeg = false;

  ngOnInit() {
  }

  addNewKeg() {
    this.addingKeg = true;
  }
}
