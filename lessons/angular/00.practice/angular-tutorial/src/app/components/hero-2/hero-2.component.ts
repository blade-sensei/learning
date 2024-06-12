import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero-2',
  templateUrl: './hero-2.component.html',
  styleUrl: './hero-2.component.css'
})
export class Hero2Component {
  public heroTitle = 'Filmora 12 is Here, Your Freedom to Creativiy'
  public heroSubtitle = 'A cross-platform for making videos anywhere for all creators!'

  @Output() changeToInSlider = new EventEmitter<string>()

  seeUpdates() {
    alert('updates ! 🌟')
  }

  goTo(direction: 'next' | 'previous') {
    this.changeToInSlider.emit(direction);
  }
}
