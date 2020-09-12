import { Component, OnInit } from '@angular/core';
import { Posts } from './posts'

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  typesOfCategory: string[] = ['Popular', 'New', 'Freshmen', 'College Life', 'Random', 'Classes', 'Questions'];

  Posts = Posts;

  constructor() { }

  ngOnInit(): void {
  }

}
