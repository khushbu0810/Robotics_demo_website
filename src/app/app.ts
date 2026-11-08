import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  flippedCard: number | null = null;

  toggleCard(cardNumber: number): void {
    this.flippedCard =
      this.flippedCard === cardNumber ? null : cardNumber;
  }

}