import { Interest } from '../models/interest.model';

export class Interests {

  public static readonly ALL = [
    new Interest({
      icon: 'fa-pencil',
      title: 'drawing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    }),
    new Interest({
      icon: 'fa-music',
      title: 'music',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    }),
    new Interest({
      icon: 'fa-gamepad',
      title: 'videogames',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    }),
    new Interest({
      icon: 'fa-film',
      title: 'cinema',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    }),
  ];

}
