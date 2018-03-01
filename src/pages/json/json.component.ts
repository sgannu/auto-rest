import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  dataObject: any;

  constructor() {
    this.dataObject = { "this is": "json" }
  }

  ngOnInit() {
  }

}
