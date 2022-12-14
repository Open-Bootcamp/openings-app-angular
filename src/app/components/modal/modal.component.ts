import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Opening } from 'src/app/interfaces/anime';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  // useRef de React
  @ViewChild('modalRef') modalRef!: ElementRef;
  @Input() openings: Opening[] | undefined;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  changeAudio(opening: Opening) {
    /* debugger; */
    /* console.log(opening); */
    this.newItemEvent.emit(opening.op);
  }

  closeModal() {
    window.onscroll = null;
    this.modalRef.nativeElement.close();
  }

  // No se utiliza
  showDialgo() {
    this.modalRef?.nativeElement.showModal();
  }
}
