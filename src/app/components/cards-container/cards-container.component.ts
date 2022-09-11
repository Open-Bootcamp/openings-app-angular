import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/interfaces/anime';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {
  animes: Anime[] = [];
  constructor(private dataServise: DataService) { }

  ngOnInit(): void {
    this.dataServise.getData()
    .subscribe(animes => this.animes = animes);

  }

}
