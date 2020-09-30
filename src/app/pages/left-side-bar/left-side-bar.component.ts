import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent implements OnInit {

  typesOfCategory: string[] = ['Popular', 'New', 'Freshmen', 'College Life', 'Random', 'Classes', 'Questions'];

  constructor() { }

  ngOnInit(): void {
  }

}
