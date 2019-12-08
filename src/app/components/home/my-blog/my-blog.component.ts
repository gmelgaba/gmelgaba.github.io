import { Component, OnInit } from '@angular/core';
import { BlogArticle } from 'src/app/models/blog.article.model';
import { BlogArticles } from 'src/app/constants/blog.articles.constants';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.scss']
})
export class MyBlogComponent implements OnInit {
  articles: BlogArticle[] = BlogArticles.ALL.filter((article, index) => index < 3);
  showBlogLink = false;

  constructor() { }

  ngOnInit() {
  }

}
