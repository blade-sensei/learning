import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public heroTitle = 'Filmora 12 is Here, Your Freedom to Creativiy'
  public heroSubtitle = 'A cross-platform for making videos anywhere for all creators!'

  @Input()
  public img = '';

  @Output() changeToInSlider = new EventEmitter<string>()

  seeUpdates() {
    alert('updates ! 🌟')
  }

  goTo(direction: 'next' | 'previous') {
    this.changeToInSlider.emit(direction);
  }
}
