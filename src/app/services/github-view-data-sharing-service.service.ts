import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GithubViewDataSharingService {

  // first we create a source on which we will call next to change the value of it
  private currentOpenedFileSource: BehaviorSubject<any> = new BehaviorSubject(undefined);
  // then we create observable out of source to subscribe whenever the value of source changes
  currentOpenedFile = this.currentOpenedFileSource.asObservable();


  constructor() {
  }

  changeCurrentOpenedFile(file: any) {
    this.currentOpenedFileSource.next(file);
  }


}
