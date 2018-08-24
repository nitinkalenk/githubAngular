import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-githubview-component',
  templateUrl: './githubview-component.component.html',
  styleUrls: ['./githubview-component.component.css']
})
export class GithubviewComponentComponent implements OnInit, OnChanges {

  @Input()
  sourceUrl: string;
  fileContent: string;
  data: any;

  constructor(private _githubService: GithubService) {
    console.log('githubciew component constructor');
  }

  ngOnInit() {
    console.log(this.sourceUrl);
    this._githubService.getRepoContents().subscribe(data => {
      this.data = data;
    });
    /* this._githubService.getFileContent().subscribe(data => {
      console.log(data);
      this.fileContent = window.atob(data.content);
      console.log('file Contents are');
      console.log(this.fileContent);
    }); */
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'sourceUrl') {
        const change: SimpleChange = changes[propName];
        console.log(change.previousValue);
        console.log(change.currentValue);
      }

    }
  }

}
