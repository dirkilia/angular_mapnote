import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card_number_arr: string[];

  constructor() {  }
  @Input()
  card_info

  ngOnInit(): void {
    this.card_number_arr = this.card_info.number.match(/.{4}/g);
  }

}
