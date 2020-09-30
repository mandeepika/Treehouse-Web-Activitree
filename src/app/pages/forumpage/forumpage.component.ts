import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/posts';

@Component({
  selector: 'app-forumpage',
  templateUrl: './forumpage.component.html',
  styleUrls: ['./forumpage.component.scss']
})
export class ForumpageComponent implements OnInit {

  isChecked = true;
  Posts = Posts;

  constructor() { }

  ngOnInit(): void {
  }

}
