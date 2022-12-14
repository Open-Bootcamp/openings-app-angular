import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { ViewBtnComponent } from './view-btn/view-btn.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardsContainerComponent,
    CardComponent,
    FooterComponent,
    ModalComponent,
    ViewBtnComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    CardsContainerComponent,
    FooterComponent,
    ModalComponent,
  ],
})
export class ComponentsModule {}
