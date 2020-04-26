import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PeopleService } from '../people.service';
import { Person } from '../person';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styles: []
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
  professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord']
  person: Person;
  routerSubscription: Subscription;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute
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

  savePersonDetails() {
    this.peopleService.save(this.person);
  }

  goBackToPeopleList() {
    window.history.back();
  }
}
