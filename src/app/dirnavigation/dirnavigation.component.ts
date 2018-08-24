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

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
  }

  expandCurrentDir() {
    console.log(`expanding dir named ${this.dir.name}`);
    this._githubService.getDirContents(this.dir._links.self).subscribe(dirContent => {
      console.log(dirContent);
      this.innerDirs = dirContent;
    });
  }

}
