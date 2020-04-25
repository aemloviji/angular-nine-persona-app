import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  selectedPerson: Person;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.people = this.peopleService.getAll();
  }

  selectPerson(person: Person) {
    this.selectedPerson = person;
  }
}
