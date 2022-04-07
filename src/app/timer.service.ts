import { DOCUMENT, SET_INTERVAL } from './di_timer_dependencies';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class TimerService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(SET_INTERVAL) private setInterval: Function
  ) {}

  public start() {
    const timerOutputElement = document.querySelector('#timer-output');
    let counter: number = 0;
    setInterval(() => {
      timerOutputElement.innerHTML = `${counter++}`;
    }, 1000);
  }
}
