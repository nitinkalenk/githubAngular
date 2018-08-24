import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubviewComponentComponent } from './githubview-component/githubview-component.component';
import { FilenavigationComponent } from './filenavigation/filenavigation.component';
import { CodeViewComponent } from './code-view/code-view.component';
import { DirnavigationComponent } from './dirnavigation/dirnavigation.component';
import { FileDirContainerComponent } from './file-dir-container/file-dir-container.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubviewComponentComponent,
    FilenavigationComponent,
    CodeViewComponent,
    DirnavigationComponent,
    FileDirContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
