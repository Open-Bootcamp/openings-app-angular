import { Component, OnInit, Input } from '@angular/core';
import { Anime } from 'src/app/interfaces/anime';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() anime!: Anime;

  controls: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleControls() {
    this.controls = !this.controls;
  }

  /* debuggerConsoleLog() {
    console.log(this.controls);
  } */
}
