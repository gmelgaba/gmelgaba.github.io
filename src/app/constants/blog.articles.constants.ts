import { BlogArticle } from '../models/blog.article.model';

export class BlogArticles {

  public static readonly ALL = [
    new BlogArticle({
      date: '2019-11-13',
      type: 'tech',
      title: 'express js project structure',
      description: 'A small example of how I like to structure an API REST api using express js.',
      image: 'assets/images/blogs/express-project-structure.png',
      link: ''
    }),
    new BlogArticle({
      date: '2019-03-20',
      type: 'tech',
      title: 'google chrome extensions',
      description: 'A small introduction to the world of chrome extensions!! a very powerful tool.',
      image: 'assets/images/blogs/chrome-extensions.png',
      link: ''
    }),
    new BlogArticle({
      date: '2019-01-27',
      type: 'tech',
      title: 'customize your bash profile',
      description: 'How to Customize Your Mac\'s Terminal for Better Productivity.',
      image: 'assets/images/blogs/customize-terminal-macos.jpg',
      link: ''
    }),
    new BlogArticle({
      date: '2019-01-12',
      type: 'tech',
      title: 'angular 2+ app project structure',
      description: 'A small example of how I like to structure an angular project using angular 2+.',
      image: 'assets/images/blogs/angular-project-structure.jpg',
      link: ''
    }),
  ];

}
