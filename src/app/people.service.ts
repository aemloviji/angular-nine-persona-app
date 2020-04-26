import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Person } from './person';



@Injectable({ providedIn: 'root' })
export class PeopleService {
  private baseUrl = 'https://swapi.dev/api';
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Person[]> {
    return this.httpClient
      .get(`${this.baseUrl}/people/`, { headers: this.getHeaders() })
      .pipe(
        map(toPersonArray),
        catchError(this.handleError));
  }

  get(id: number): Observable<Person> {
    return this.httpClient
      .get(`${this.baseUrl}/people/${id}/`, { headers: this.getHeaders() })
      .pipe(
        map(toPerson),
        catchError(this.handleError));
  }

  save(person: Person) {
    const originalPerson = this.get(person.id);
    if (originalPerson) {
      Object.assign(originalPerson, person);
    }
  }

  private getHeaders() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Accept', 'application/json');
    return httpHeaders;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}

function toPersonArray(data: any): Person[] {
  return data.results.map(toPerson);
}

function toPerson(data: any) {
  return {
    id: extractUserId(data),
    name: data.name,
    weight: Number.parseInt(data.mass),
    height: Number.parseInt(data.height),
  };
}

function extractUserId(personData: any): number {
  const extractedId = personData.url
    .replace('http://swapi.dev/api/people/', '')
    .replace('/', '');
  return Number.parseInt(extractedId);
}
