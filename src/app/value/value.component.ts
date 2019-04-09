import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
   this.getValues();
  }

  getValues() {
    this.http.get('http://localhost/DatingApp.API/api/values').subscribe(response => {
      this.values = response;
// tslint:disable-next-line: no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }

}
