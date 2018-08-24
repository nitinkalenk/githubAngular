import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  githubUrl: string;
  // 0 for lazy and 1 for eager
  fetchType: number;

  ngOnInit() {
    this.githubUrl = 'https://github.com/nitinkalenk/snippets';
    this.fetchType = 1;
  }

}
