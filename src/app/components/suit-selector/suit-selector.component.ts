import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Suit } from '../../domain/game/suit.enum';

@Component({
  selector: 'app-suit-selector',
  templateUrl: 'suit-selector.component.html'
})
export class SuitSelectorComponent {
  @Input() activeSuit = Suit.HEARTS;

  @Output() activeSuitChange = new EventEmitter<Suit>();

  Suit = Suit;
  Suits: Suit[] = [
    Suit.HEARTS,
    Suit.SPADES,
    Suit.DIAMONDS,
    Suit.CLUBS
  ];

  onActiveSuitChange(suit: Suit): void {
    this.activeSuitChange.emit(suit);
  }
}
