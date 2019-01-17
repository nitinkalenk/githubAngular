import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-dirnavigation',
  templateUrl: './dirnavigation.component.html',
  styleUrls: ['./dirnavigation.component.css']
})
export class DirnavigationComponent implements OnInit {

  @Input()
  dir: any;
  innerDirs: [any];
  expanded: boolean;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this.expanded = false;
  }


  toggleDir() {
    this.expanded = !this.expanded;
    this._githubService.getDirContents(this.dir._links.self).subscribe(dirContent => {
      this.innerDirs = dirContent;
    });
  }

}
