import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // Using alias here for person name and person city
  @Input('name') cPersonName: string;
  @Input('city') cPersonCity: string;
  @Input() cPersonState: string;

  @Output() sendPersonDetails: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public clickedMe() {
    let personObj: any = {
      clickedName: this.cPersonName,
      clickedCity: this.cPersonCity,
      clickedState: this.cPersonState
    };
    this.sendPersonDetails.emit(personObj);
  }
}
