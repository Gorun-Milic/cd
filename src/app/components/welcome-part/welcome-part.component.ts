import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-part',
  templateUrl: './welcome-part.component.html',
  styleUrls: ['./welcome-part.component.css']
})
export class WelcomePartComponent implements OnInit {

  classesForText = {
    "bg-text": true,
    "bg-text-animation": false
  }

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.classesForText['bg-text-animation'] = true, 0);
  }

}
