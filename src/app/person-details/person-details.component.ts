import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-person-details',
  template: `
    <section *ngIf="person">
      <h2>Person info</h2>
      <ul>
        <li>
          Name: {{person.name}}
        </li>
        <li>
          Weight: {{person.weight}}
        </li>
        <li>
          Height: {{person.height}}
        </li>
      </ul>
    </section>

    <button (click)="goBackToPeopleList()">Back to people list</button>
  `,
  styles: []
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
  person: Person;
  routerSubscription: Subscription;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.routerSubscription = this.route.params.subscribe(params => {
      const id = Number.parseInt(params.id);
      this.person = this.peopleService.get(id);
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  goBackToPeopleList() {
    window.history.back();
  }
}
