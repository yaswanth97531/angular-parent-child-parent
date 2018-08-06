import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child-mom-child';
  public persons: any = [
    { name: 'Ram', city: 'Ayodha', state: 'Bharat' },
    { name: 'Venkateswara', city: 'Tirumala', state: 'Bharat' },
    { name: 'Krishna', city: 'Mathura', state: 'Bharat' }
  ];

  public clickedPersonData: any;

  public getPersonDetails(data: any): void {
    this.clickedPersonData = data;
  }
}
