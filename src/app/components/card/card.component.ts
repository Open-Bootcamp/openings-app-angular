import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Anime } from 'src/app/interfaces/anime';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  //  const [controls, setControls] = useState(true);
  controls: boolean = true;
  // const [op, setOp] = useState(new Audio(`${card.soundSrc}`));
  op = new Audio();
  opening = new Audio();
  @Input() anime!: Anime;
  @ViewChild(ModalComponent) child?: ModalComponent;
  constructor() {}

  ngOnInit(): void {
    this.op = new Audio(this.anime.openings[0].op);
  }

  changedOpening(newOpening: string): void {
    this.closeModal();
    window.onscroll = null;
    this.op.pause();
    this.controls = true;
    this.op = new Audio(newOpening);
  }

  toggleControls(): void {
    this.controls = this.controls ? false : true;
    this.op.paused ? this.op.play() : this.op.pause();
  }

  showModal(): void {
    this.child?.modalRef.nativeElement.showModal();
  }

  closeModal(): void {
    this.child?.modalRef.nativeElement.close();
  }
}
