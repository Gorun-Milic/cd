import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-part',
  templateUrl: './employees-part.component.html',
  styleUrls: ['./employees-part.component.css']
})
export class EmployeesPartComponent implements OnInit {

  emp1Classes = {
    "emp1": true,
    "emp-active": true
  }

  emp2Classes = {
    "emp2": true,
    "emp-active": false
  }

  emp3Classes = {
    "emp3": true,
    "emp-active": false
  }

  emp4Classes = {
    "emp4": true,
    "emp-active": false
  }

  emp1Line = "emp-line-active";
  emp2Line = "emp2-line";
  emp3Line = "emp3-line";
  emp4Line = "emp4-line";

  empImage = 'emp-image-box1';
  
  constructor() { }


  ngOnInit() {
  }

  emp1Clicked() {
    this.emp2Classes['emp-active'] = false;
    this.emp3Classes['emp-active'] = false;
    this.emp4Classes['emp-active'] = false;
    this.emp1Classes['emp-active'] = true;

    this.emp2Line = "emp2-line";
    this.emp3Line = "emp3-line";
    this.emp4Line = "emp4-line";
    this.emp1Line = "emp-line-active";

    this.empImage = 'emp-image-box1';
  }

  emp2Clicked() {
    this.emp1Classes['emp-active'] = false;
    this.emp3Classes['emp-active'] = false;
    this.emp4Classes['emp-active'] = false;
    this.emp2Classes['emp-active'] = true;

    this.emp1Line = "emp1-line";
    this.emp3Line = "emp3-line";
    this.emp4Line = "emp4-line";
    this.emp2Line = "emp-line-active";

    this.empImage = 'emp-image-box2';
  }

  emp3Clicked() {
    this.emp1Classes['emp-active'] = false;
    this.emp2Classes['emp-active'] = false;
    this.emp4Classes['emp-active'] = false;
    this.emp3Classes['emp-active'] = true;

    this.emp1Line = "emp1-line";
    this.emp2Line = "emp2-line";
    this.emp4Line = "emp4-line";
    this.emp3Line = "emp-line-active";

    this.empImage = 'emp-image-box3';
  }

  emp4Clicked() {
    this.emp1Classes['emp-active'] = false;
    this.emp2Classes['emp-active'] = false;
    this.emp3Classes['emp-active'] = false;
    this.emp4Classes['emp-active'] = true;

    this.emp1Line = "emp1-line";
    this.emp2Line = "emp2-line";
    this.emp3Line = "emp3-line";
    this.emp4Line = "emp-line-active";

    this.empImage = 'emp-image-box4';
  }

}
