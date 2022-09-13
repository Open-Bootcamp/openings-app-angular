import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-btn',
  templateUrl: './view-btn.component.html',
  styleUrls: ['./view-btn.component.css'],
})
export class ViewBtnComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  disableScroll() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  showEmit() {
    this.newItemEvent.emit();
  }
}
