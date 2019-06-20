import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuestionsService} from '../questions.service';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() CheckIfAnswerCorrect = new EventEmitter();

  constructor(public QService: QuestionsService, public Shared: SharedService) { }

  ngOnInit() {
  }

  get Qindex() {
    return this.QService.get_Qind();
  }

  SkipQuestion() {
    if (this.QService.get_Qind() === this.QService.get_Questions().length - 1) {
      clearInterval(this.Shared.intervalID);
    }
    this.QService.QuestionIndex += 1;
    this.QService.SkippedAnswers += 1;  
    this.Shared.selectedOption = null;
  }

  GoToNextQuestion() {
    this.Shared.showNextQuestionButton = false;
    this.Shared.showCorrectRibbon = false;
    this.QService.QuestionIndex += 1;
    this.Shared.firstAttempt = true;    
    this.Shared.selectedOption = null;
    console.log('I' + this.QService.InCorrectAnswers, 'C' + this.QService.CorrectAnswers, 'S' + this.QService.SkippedAnswers +
    'Qno' + this.QService.QuestionIndex);
  }

  OnCheckButtonClick() {
    console.log(this.Shared.selectedOption);
    if (this.Shared.selectedOption) {
      this.CheckIfAnswerCorrect.emit();
      if (this.Shared.isSelectedRadioCorrect) {
        if (this.Shared.firstAttempt) {
          this.QService.CorrectAnswers += 1;
          this.Shared.firstAttempt = false;
        }
        this.Shared.showCorrectRibbon = true;
        this.Shared.showIncorrectRibbon = false;
        this.Shared.showNextQuestionButton = true;
      } else {
        if (this.Shared.firstAttempt) {
          this.QService.InCorrectAnswers += 1;
          this.Shared.firstAttempt = false;
        }
        this.Shared.showIncorrectRibbon = true;
        this.Shared.showCorrectRibbon = false;
      }
    }
  }

  ShowResultPage() {
    this.QService.QuestionIndex = 39;
    this.Shared.stopTimer();
  }

}
