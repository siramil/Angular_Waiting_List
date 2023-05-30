import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  persons : Person[] = [];

  constructor(private personService: PersonService) { }
  
  selectedPerson?: Person;
  

  ngOnInit(): void {
    this.loadPerson();
  }

  loadPerson(): void {
    this.persons = this.personService.getPerson();
  }

  onClick(person: Person): void {
    this.selectedPerson = person;
    }
}
