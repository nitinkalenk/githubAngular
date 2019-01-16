import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { GithubService } from '../services/github.service';
import { GithubViewDataSharingService } from '../services/github-view-data-sharing-service.service';

@Component({
  selector: 'app-githubview-component',
  templateUrl: './githubview-component.component.html',
  styleUrls: ['./githubview-component.component.css'],
  providers : [ GithubViewDataSharingService ]
})
export class GithubviewComponentComponent implements OnInit, OnChanges {

  @Input()
  sourceUrl: string;
  file: any;
  data: any;

  constructor(private _githubService: GithubService,
  private _gitubViewDataSharingService: GithubViewDataSharingService) {

  }

  ngOnInit() {
    const userAndRepo = this.sourceUrl.replace('https://github.com/', '');
    const user = userAndRepo.split('/')[0];
    const repo = userAndRepo.split('/')[1];
    this._githubService.getRepoContents('https://api.github.com/repos/' + user + '/' + repo + '/contents').subscribe(data => {
      this.data = data;
    });
    this._gitubViewDataSharingService.currentOpenedFile.subscribe(file => {
      this.file = file;
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'sourceUrl') {
        const change: SimpleChange = changes[propName];
      }

    }
  }

}
