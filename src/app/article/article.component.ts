import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() { 
    // this.article = new Article(
    //   'Anguler 6',
    //   'http://anglular.io',
    //   10);
  }

  voteUp() {
    this.article.votes += 1;
  }

  voteDown() {
    this.article.votes -= 1;
  }

  ngOnInit() {
  }

}
