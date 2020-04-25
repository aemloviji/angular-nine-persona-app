import { Injectable } from '@angular/core';
import { Person } from './person';

const People: Person[] = [
  { id: 1, name: 'Person Adam', height: 181, weight: 77 },
  { id: 2, name: 'Endy Pavel', height: 196, weight: 95 },
  { id: 3, name: 'Martin Rober', height: 175, weight: 85 },
]

@Injectable({ providedIn: 'root' })
export class PeopleService {
  constructor() { }

  getAll(): Person[] {
    return People;
  }

  get(id: number): Person {
    return People.find(p => p.id === id);
  }
}
