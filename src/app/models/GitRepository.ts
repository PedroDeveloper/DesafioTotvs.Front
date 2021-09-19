interface IGitRepository {
  readonly id: number;

  name: string;

  url: string;

  language: string;
}

export class GitRepository implements IGitRepository {
  public readonly id: number;

  public name: string;

  public url: string;

  public language: string;

  constructor(gitRepository: GitRepository) {
    Object.assign(this, gitRepository);
  }
}
