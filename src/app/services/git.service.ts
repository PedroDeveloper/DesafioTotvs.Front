import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GitRepositoryService {
  constructor(private httpClient: HttpClient) {}

  findRepos(user: string) {
    return this.httpClient.get(`https://api.github.com/users/${user}/repos`);
  }
}
