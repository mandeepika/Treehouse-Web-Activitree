import { Component, OnInit } from '@angular/core';
import { Posts } from './posts'

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  

  Posts = Posts;

  constructor() { }

  ngOnInit(): void {
  }

}
