import { Component, OnInit } from '@angular/core';
import { Interest } from 'src/app/models/interest.model';
import { Interests } from 'src/app/constants/interests.constants';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {
  interests: Interest[] = Interests.ALL;

  constructor() { }

  ngOnInit() {
  }
}
