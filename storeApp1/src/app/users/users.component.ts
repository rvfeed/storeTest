import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  contacts: any;
  constructor() { }

  ngOnInit() {
    this.contacts = [
      {"id": 1, "type": "Excutive", "name": "Ann Brown", "title": "CEO", "phone": "(512)456-5555", "ext":"", "fax": "(512)456-5555", "email": "ceo@test.com"},
      {"id": 2, "type": "Excutive", "name": "Ann Brown", "title": "CEO", "phone": "(512)456-5555", "ext":"", "fax": "(512)456-5555", "email": "ceo@test.com"},
      {"id": 3, "type": "Excutive", "name": "Ann Brown", "title": "CEO", "phone": "(512)456-5555", "ext":"", "fax": "(512)456-5555", "email": "ceo@test.com"},
      {"id": 5, "type": "Excutive", "name": "Ann Brown", "title": "CEO", "phone": "(512)456-5555", "ext":"", "fax": "(512)456-5555", "email": "ceo@test.com"},
      {"id": 6, "type": "Excutive", "name": "Ann Brown", "title": "CEO", "phone": "(512)456-5555", "ext":"", "fax": "(512)456-5555", "email": "ceo@test.com"}
    ]
  }

  selectContact(e){
    console.log(e.target.checked= true);
  }

}
