import { Component, Input } from '@angular/core';
import { Suit } from '../../domain/game/suit.enum';

@Component({
  selector: 'app-suit-card',
  templateUrl: 'suit-card.component.html',
  styleUrls: ['suit-card.component.scss']
})
export class SuitCardComponent {
  @Input() suit: Suit = Suit.HEARTS;
  @Input() isActive = false;

  Suit = Suit;
}
