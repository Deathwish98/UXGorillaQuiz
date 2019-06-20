import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../questions.service';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  constructor(public QService: QuestionsService, public Shared: SharedService) { }

  ngOnInit() {
    this.Shared.startTimer(0);
    console.log(this.Shared.timer);
  }

}
