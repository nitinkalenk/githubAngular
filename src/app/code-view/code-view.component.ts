import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { GithubViewDataSharingService } from '../services/github-view-data-sharing-service.service';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.css']
})
export class CodeViewComponent implements OnInit, OnChanges {

  @Input()
  file: any;
  fileContent: string;

  constructor(private _githubService: GithubService) {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'file') {
        const file: SimpleChange = changes[propName];
        this.file = file.currentValue;
        console.log('file in code view');
        console.log(file.currentValue);
        if (this.file !== undefined) {
          this._githubService.getFileContent(this.file._links.self).subscribe(data => {
            console.log(data);
            this.fileContent = window.atob(data.content);
            console.log('file Contents are');
            console.log(this.fileContent);
        });
        }

      }
    }
  }

}
