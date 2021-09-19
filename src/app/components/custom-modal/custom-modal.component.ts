import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
})
export class CustomModalComponent implements OnInit {
  @Output() emitYes = new EventEmitter();
  @Output() emitNo = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  proceed() {
    this.emitYes.emit();
  }

  denied() {
    this.emitNo.emit();
  }
}
