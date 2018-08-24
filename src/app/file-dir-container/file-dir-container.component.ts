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
export class FileDirContainerComponent implements OnInit, OnChanges {

  @Input()
  data: any;
  dirs = [];
  files = [];

  @ViewChildren(DirnavigationComponent)
  private dirnavigationComps: QueryList<DirnavigationComponent>;
  // @Output()
  // currentFileChanged: EventEmitter = new EventEmitter();

  constructor(private _githubViewDataSharingService: GithubViewDataSharingService) {
    console.log('FileDirContainerComponent constructor');
   }

  ngOnInit() {
    console.log('data is');
    console.log(this.data);
    const self = this;
    this.data.forEach(function(item) {
      if (item.type === 'dir') {
        this.dirs.push(item);
      } else if (item.type === 'file') {
        this.files.push(item);
      }
    }, this);
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    for (const propName in simpleChanges) {
      if (propName === 'data') {
        const simpleChange: SimpleChange = simpleChanges[propName];
        console.log(simpleChange.previousValue);
        console.log(simpleChange.currentValue);
      }
    }
  }

  openFile(file: any) {
    console.log('file to open is');
    console.log(file);
    // this.currentFileChanged.emit(file);
    this._githubViewDataSharingService.changeCurrentOpenedFile(file);
  }

  expandDir(dir: any, index: number): void {
    const dirNavCompsArray = this.dirnavigationComps.toArray();
    const dirNavComp: DirnavigationComponent = dirNavCompsArray[index];
    dirNavComp.expandCurrentDir();
  }

  getRandomColor() {
    const colors = ['red', 'bule', 'green', 'brown', 'cyan'];

    let randomNum = Math.random() * 10;
    if (randomNum > 5) {
      randomNum = 10 - randomNum;
    }
    return colors[randomNum];
  }

}
