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

  attributes: {id:string} = {
    id: 'paragraph1'
  }

  onClick():void {
    this.attributes = this.attributes.id === 'paragraph1' ? {id: 'paragraph2'} : {id: 'paragraph1'}

  }
}
