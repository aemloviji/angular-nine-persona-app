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
  errorMessage = '';
  isLoading = true;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService
      .getAll()
      .subscribe(
        p => this.people = p,
        e => this.errorMessage = e,
        () => this.isLoading = false);
  }
}
