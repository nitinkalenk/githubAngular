import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

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

  // @Output()
  // currentFileChanged: EventEmitter = new EventEmitter();

  constructor() {
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
  }

}
