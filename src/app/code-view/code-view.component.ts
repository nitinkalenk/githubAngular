import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { GithubViewDataSharingService } from '../services/github-view-data-sharing-service.service';
import { GithubService } from '../services/github.service';
import { HttpClientJsonpModule } from '@angular/common/http';
declare var hljs: any;

@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.css']
})
export class CodeViewComponent implements OnChanges {

  @Input()
  file: any;
  fileContent: string;

  constructor(private _githubService: GithubService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'file') {
        const file: SimpleChange = changes[propName];
        this.file = file.currentValue;
        this.fileContent = '';
        if (this.file !== undefined) {
          this._githubService.getFileContent(this.file._links.self).subscribe(data => {
            this.fileContent = window.atob(data.content);
            this.highlightBlock();
        });
        }
      }
    }
  }

  highlightBlock() {
    setTimeout(() => {
      const block = document.querySelector('pre code');
      hljs.highlightBlock(block);
    }, 0);
  }
}
