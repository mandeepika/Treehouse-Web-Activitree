import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  typesOfCategory: string[] = ['Popular', 'Science', 'Math', 'Cool Posts', 'Blah', 'Blah'];

  constructor() { }

  ngOnInit(): void {
  }

}
