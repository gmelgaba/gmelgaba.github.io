import { Component, OnInit, Input } from '@angular/core';
import { Interest } from 'src/app/models/interest.model';

@Component({
  selector: 'app-interest-card',
  templateUrl: './interest-card.component.html',
  styleUrls: ['./interest-card.component.scss']
})
export class InterestCardComponent implements OnInit {
  @Input() interest: Interest;

  constructor() { }

  ngOnInit() {
  }

}
