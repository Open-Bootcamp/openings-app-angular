import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Anime } from 'src/app/interfaces/anime';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  controls: boolean = true;
  fisrtOpening: string = "";
  opening = new Audio();
  @Input() anime!: Anime;
  @ViewChild(ModalComponent) child?: ModalComponent
  constructor() { }

  ngOnInit(): void {
    this.fisrtOpening = this.anime.openings[0].op;
  }

  changedOpening(opening: string) {
    this.fisrtOpening = opening;
  }


  toggleControls() {
    this.controls = !this.controls;
    console.log(this.fisrtOpening);
    if (!this.controls) {
      this.opening.src = this.fisrtOpening;
      this.opening.load();
      this.opening.play();
      return;
    }
    this.opening.pause();

  }

  showModal() {

    this.child?.modalRef.nativeElement.showModal();
  }

}
