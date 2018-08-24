import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { GithubViewDataSharingService } from '../services/github-view-data-sharing-service.service';

@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.css']
})
export class CodeViewComponent implements OnInit, OnChanges {

  @Input()
  file: any;

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'file') {
        const file: SimpleChange = changes[propName];
        console.log(file);
      }
    }
  }

}
