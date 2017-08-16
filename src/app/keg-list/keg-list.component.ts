import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';

@Component({
  selector: 'keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent implements OnInit {
  @Input() childKegList: Keg[];
  // @Output()

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

}
