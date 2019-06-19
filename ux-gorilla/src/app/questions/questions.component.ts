import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {QuestionsService} from '../questions.service';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class QuestionsComponent implements OnInit {

  constructor(public QService: QuestionsService, public Shared: SharedService) { }

  ngOnInit() {
  }

  getSelectedOption(Option: any) {
    this.Shared.selectedOption = Option;
  }

  checkIfRadioCorrect() {
    this.Shared.isSelectedRadioCorrect = this.Shared.selectedOption.correct;
  }

}
