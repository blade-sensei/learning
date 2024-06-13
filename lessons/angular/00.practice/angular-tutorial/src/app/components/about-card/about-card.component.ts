import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.css'
})
export class AboutCardComponent {

  @Input()
  text = ""

  @Input()
  imgPath = ""

}
