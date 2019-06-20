import { Injectable } from '@angular/core';
import {strictEqual} from 'assert';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  selectedOption: any;
  isSelectedRadioCorrect: boolean;
  showIncorrectRibbon: boolean;
  showCorrectRibbon: boolean;
  showNextQuestionButton: boolean;
  firstAttempt = true;
  timer: string;
  intervalID: any;

  startTimer(startTime: number) {
    let minutes: number
    let seconds: number;
    this.intervalID = setInterval(() => {
      minutes = startTime / 60;
      seconds = startTime % 60;

      minutes = minutes < 10 ? parseInt('0' + minutes, 10) : minutes;
      seconds = seconds < 10 ? parseInt('0' + seconds, 10) : seconds;

      this.timer = minutes + ':' + seconds;
      ++startTime;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalID);
  }

  constructor() { }
}
