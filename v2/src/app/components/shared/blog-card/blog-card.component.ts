import { Component, OnInit, Input } from '@angular/core';
import { BlogArticle } from 'src/app/models/blog.article.model';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() article: BlogArticle;

  constructor() { }

  ngOnInit() {
  }
}
