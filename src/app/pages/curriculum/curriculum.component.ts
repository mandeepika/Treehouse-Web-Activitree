import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isMenuOpen = true;
  contentMargin = 240;

  items=[
    {name:"Math",subItems:[{name:"Algebra"},{name:"Geometry"},{name:"Pre-Calculus"},{name:"Calculus"}]},
    {name:"English",subItems:[{name:"AP Language"},{name:"AP Literature"},{name:"British Literature"}]},
    {name:"Science",subItems:[{name:"Biology"},{name:"Chemistry"},{name:"Physics"}]}
  ];

}
