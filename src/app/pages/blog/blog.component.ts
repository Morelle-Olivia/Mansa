import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  isTruncated = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleText(): void {
    this.isTruncated = !this.isTruncated;
  }

}
