import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-filenavigation',
  templateUrl: './filenavigation.component.html',
  styleUrls: ['./filenavigation.component.css']
})
export class FilenavigationComponent implements OnInit {

  @Input()
  file: any;

  constructor() {
    console.log('file navigation constructor');
  }

  ngOnInit() {
    console.log('file is');
    console.log(this.file);
  }

}
