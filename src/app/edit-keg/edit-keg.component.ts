import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';

@Component({
  selector: 'edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent implements OnInit {
  @Input() childSelectedKeg: Keg;
  @Output() editCompleteButtonSender = new EventEmitter();

  ngOnInit() {
  }

  editCompleteButtonClicked() {
    this.editCompleteButtonSender.emit()
  }
}
