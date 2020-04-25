import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getAll(): Person[] {
    return [
      { name: 'Person Adam', height: 181, weight: 77 },
      { name: 'Endy Pavel', height: 196, weight: 95 },
      { name: 'Martin Rober', height: 175, weight: 85 },
    ];
  }
}
