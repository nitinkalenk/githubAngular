import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GithubViewDataSharingService {

  // first we create a source on which we will call next to change the value of it
  private currentOpenedFileSource: BehaviorSubject<any> = new BehaviorSubject(null);
  // then we create observable out of source to subscribe whenever the value of source changes
  currentOpenedFile = this.currentOpenedFileSource.asObservable();


  constructor() {
    console.log('FileDirContainerDataSharingService constructor');
  }

  changeCurrentOpenedFile(file: any) {
    console.log('changing current opened file to ' + file);
    this.currentOpenedFileSource.next(file);
  }


}
