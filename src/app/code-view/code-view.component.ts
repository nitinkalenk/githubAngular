import { Component, OnInit, Input } from '@angular/core';
import { GithubViewDataSharingService } from '../services/github-view-data-sharing-service.service';

@Component({
  selector: 'app-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.css']
})
export class CodeViewComponent implements OnInit {

  @Input()
  codeStr: string;

  constructor(private _gitubViewDataSharingService: GithubViewDataSharingService) {
    console.log('CodeViewComponent constructor');
  }

  ngOnInit() {
    this._gitubViewDataSharingService.currentOpenedFile.subscribe(file => {
      console.log('current opened file in app view component is');
      console.log(file);
    });
  }



}
