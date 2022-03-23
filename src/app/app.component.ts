import { Component } from '@angular/core';

interface CardInfo {
  name: string,
  number: string,
  amount: string,
  expirationDate: string,
  paymentSystem: "visa" | "mastercard"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title: string = 'mapnote';
  card_info: CardInfo = {
    name: "some card name",
    number: "0000000000000000",
    amount: "4989,33₽",
    expirationDate: "02/33",
    paymentSystem: "visa"
  }
}
