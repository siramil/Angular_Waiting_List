import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../services/person.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() persons?: Person;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location) { }


  ngOnInit(): void {
    this.loadPerson();
  }

  loadPerson(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));   //dapatkan id dari app-routing
    this.persons = this.personService.getPersonId(id);
  }

  goBack(): void {
    this.location.back();
  }

  onSave(){
    this.location.back();
  }

}
