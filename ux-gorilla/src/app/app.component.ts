import {Component, ViewChild} from '@angular/core';
import {QuestionsComponent} from './questions/questions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  @ViewChild('QstnComponent', {static: false}) QstnComponent: QuestionsComponent;
  title = 'ux-gorilla';

  CheckSelectionForCorrection() {
    this.QstnComponent.checkIfRadioCorrect();
  }
}
