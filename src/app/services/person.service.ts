import { Injectable } from '@angular/core';
import { PERSON } from '../mock-person';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }


  getPerson(): Person[]{
    return PERSON ;
  }
  getPersonId(id: number): Person {
    const person = PERSON.find(h => h.id === id)!;
    return person;
    }

    delete(id:number) {
      let idx = PERSON.findIndex((element:Person) => element.id ==id);
      return PERSON.splice(idx,1)
    }
}
