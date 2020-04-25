import { Component, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-details',
  template: `

    <section *ngIf="person">
      <h2>Person infp</h2>
      <p>
        Name: {{person.name}}
      </p>
      <p>
        Weight: {{person.weight}}
      </p>
      <p>
        Height: {{person.height}}
      </p>
    </section>

  `,
  styles: [
  ]
})
export class PersonDetailsComponent {
  @Input() person: Person;
}
