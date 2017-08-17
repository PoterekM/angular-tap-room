import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';

@Component({
  selector: 'keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent implements OnInit {
  @Input() childKegList: Keg[];
  @Output() editButtonClickedSender = new EventEmitter();
  @Output() sellPintButtonClickedSender = new EventEmitter();
  @Output() beginHappyHourSender = new EventEmitter();
  @Output() endHappyHourSender = new EventEmitter();

  filterByPrice: string = "allKegs";
  happyHour = false;

  onChange(optionFromMenu) {
    this.filterByPrice = optionFromMenu;
  }

  ngOnInit() {
  }

  priceColor(currentKeg) {
    if (currentKeg.price < 5) {
      return "bg-info";
    } else if (currentKeg.price < 10) {
      return "bg-warning";
    } else {
      return "bg-success";
    }
  }

  editButtonClicked(currentKeg) {
    this.editButtonClickedSender.emit(currentKeg);
  }

  sellPintButtonClicked(currentKeg) {
    this.sellPintButtonClickedSender.emit(currentKeg);
  }

  beginHappyHourClicked() {
    this.happyHour = true;
    this.beginHappyHourSender.emit();
  }

  endHappyHourClicked() {
    this.happyHour = false;
    this.endHappyHourSender.emit();
  }

  // sendUpRandomInputs(input1, input2) {
  //   var obj = new OBJ(input1, input2);
  //   var array = [input1, input2];
  //   this.sendUpRandomInputs.emit(obj or array);
}
