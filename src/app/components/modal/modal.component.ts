import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Opening } from 'src/app/interfaces/anime';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@ViewChild('modalRef') modalRef!: ElementRef ;
@Input() openings: Opening[] | undefined
@Output() newItemEvent = new EventEmitter<Opening>();


  constructor() { }

  ngOnInit(): void {


  }

  changeAudio(openings:Opening){
    this.newItemEvent.emit(openings);

  }

  closeModal(){
    window.onscroll = null;
    this.modalRef.nativeElement.close();
  }



}
