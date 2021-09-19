import { Component, AfterViewInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { GitRepository } from './models/GitRepository';
import { GitRepositoryService } from './services/git.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  public showModal = false;
  public isUserSubmitedData = false;
  public gitRepositorys: GitRepository[] = [];
  public searchFor: string;

  public heroesSubscribtion: Subscription;

  constructor(private gitRepositoryService: GitRepositoryService) {}

  ngAfterViewInit() {}

  ngOnDestroy() {
    this.heroesSubscribtion.unsubscribe();
  }

  public teste() {
    alert();
  }

  public toggleModal() {
    this.showModal = !this.showModal;
  }

  public handleUserSearch(e) {
    e.preventDefault();
    this.isUserSubmitedData = !this.isUserSubmitedData;

    this.heroesSubscribtion = this.gitRepositoryService
      .findRepos(this.searchFor)
      .subscribe(
        (repositorys: GitRepository[]) =>
          this.handleSuccessRepositorySearch(repositorys),
        (error) => this.handleFailedRepositorySearch()
      );
  }

  handleSuccessRepositorySearch(repositorys: GitRepository[]) {
    this.gitRepositorys = repositorys;
  }

  handleFailedRepositorySearch() {
    this.gitRepositorys = [];
  }
}
