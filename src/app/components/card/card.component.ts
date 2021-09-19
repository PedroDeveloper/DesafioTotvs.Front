import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { GitRepository } from 'src/app/models/GitRepository';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.5s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.5s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CardComponent implements OnInit {
  public showDetails = false;

  @Output() public openModal = new EventEmitter();
  @Input() public repository: GitRepository;

  constructor() {}

  ngOnInit(): void {}

  public toggleDetailsInfo() {
    this.showDetails = !this.showDetails;
  }

  public handleOpenModal() {
    this.openModal.emit();
  }
}
