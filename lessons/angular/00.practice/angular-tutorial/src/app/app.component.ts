import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';

  heroList = ['first', 'second'];
  currentIndex = 0;

  handleGoToInSlider(value: string) {
    let nextIndex = value === "next" ? this.currentIndex + 1: this.currentIndex + -1;
    if (value === "next") {
      if (nextIndex === this.heroList.length) {
        nextIndex = 0;
      }
    } else if (value === "previous") {
      if (nextIndex === -1) {
        nextIndex = this.heroList.length -1;
      }
    }
    this.currentIndex = nextIndex;
  }
}
