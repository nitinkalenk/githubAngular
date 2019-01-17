import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, ViewChild,
   ViewChildren, QueryList } from '@angular/core';
import { EventEmitter } from 'protractor';
import { GithubViewDataSharingService } from '../services/github-view-data-sharing-service.service';
import { DirnavigationComponent } from '../dirnavigation/dirnavigation.component';

@Component({
  selector: 'app-file-dir-container',
  templateUrl: './file-dir-container.component.html',
  styleUrls: ['./file-dir-container.component.css']
})
export class FileDirContainerComponent implements OnInit {

  @Input()
  data: any;
  dirs = [];
  files = [];

  constructor(private _githubViewDataSharingService: GithubViewDataSharingService) {
   }

  ngOnInit() {
    this.data.forEach(function(item) {
      if (item.type === 'dir') {
        this.dirs.push(item);
      } else if (item.type === 'file') {
        this.files.push(item);
      }
    }, this);
  }

  openFile(file: any) {
    this._githubViewDataSharingService.changeCurrentOpenedFile(file);
  }



}
