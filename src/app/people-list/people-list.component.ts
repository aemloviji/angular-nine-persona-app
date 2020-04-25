import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-people-list',
  template: `
    <ul>
      <li *ngFor="let p of people">
        {{ p.name }}
      </li>
    </ul>    
  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [
    { name: "Person Adam", height: 181, weight: 77 },
    { name: "Endy Pavel", height: 196, weight: 95 },
    { name: "Martin Rober", height: 175, weight: 85 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
