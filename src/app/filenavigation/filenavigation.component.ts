import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-filenavigation',
  templateUrl: './filenavigation.component.html',
  styleUrls: ['./filenavigation.component.css']
})
export class FilenavigationComponent {

  @Input()
  file: any;

}
