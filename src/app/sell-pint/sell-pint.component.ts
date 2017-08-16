import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';

@Component({
  selector: 'sell-pint',
  templateUrl: './sell-pint.component.html',
  styleUrls: ['./sell-pint.component.css']
})
export class SellPintComponent implements OnInit {
  @Input() childCurrentKeg: Keg;
  @Output() sellPintButtonClickedSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }




}
