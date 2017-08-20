import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  votes: number;
  title: string;
  link: string;
  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 13;
  }

  votesUp(): boolean {
    this.votes += 1;
    return false;
  }

  votesDown(): boolean {
    this.votes -= 1;
    return false;
  }

  ngOnInit() {
  }

}
