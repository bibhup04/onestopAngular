import { Component, HostBinding, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PlanDTO, OttDTO } from 'src/app/DTO/plan';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('flip', [
      state('front', style({ transform: 'none' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front => back', [animate('0.5s')]),
      transition('back => front', [animate('0.5s')]),
    ]),
  ],
})
export class CardComponent {
  @Input() plan?: PlanDTO;
  flipState: string = 'front';

  toggleFlip() {
    this.flipState = this.flipState === 'front' ? 'back' : 'front';
  }

  ottImages: { [key: string]: string } = {
    'Netflix': 'https://cdn-icons-png.flaticon.com/512/2504/2504929.png',
    'AmazonPrimeVideo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Amazon_Prime_Video_blue_logo_1.svg/2048px-Amazon_Prime_Video_blue_logo_1.svg.png',
    'Disney+': 'https://hindubabynames.info/wp-content/themes/hbn_download/download/entertainment-and-channels-companies/disney-plus-hotstar-logo.png',
    'SonyLiv': 'https://hindubabynames.info/wp-content/themes/hbn_download/download/entertainment-and-channels-companies/sony-liv-logo.png'
  };
  
}
