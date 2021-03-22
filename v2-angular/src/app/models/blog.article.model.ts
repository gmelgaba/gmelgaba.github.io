export class BlogArticle {
  date: Date;
  type: string;
  title: string;
  description: string;
  link: string;
  image: string;

  constructor(se: any) {
    this.date = new Date(se.date);
    this.type = se.type;
    this.title = se.title;
    this.description = se.description;
    this.link = se.link;
    this.image = se.image;
  }
}
