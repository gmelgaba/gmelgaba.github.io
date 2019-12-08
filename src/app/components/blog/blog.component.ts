import { Component, OnInit } from '@angular/core';
import { BlogArticle } from 'src/app/models/blog.article.model';
import { BlogArticles } from 'src/app/constants/blog.articles.constants';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles: BlogArticle[] = BlogArticles.ALL;

  constructor() { }

  ngOnInit() {
    this.loadTableOfContents();
  }

  private loadTableOfContents() {
    // this.articles.sort((a, b) => Number(a.date) < Number(b.date));
  }
}
