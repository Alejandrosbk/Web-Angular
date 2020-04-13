import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  instance: any = null;

  constructor() { }

  ngOnInit(): void {
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {
      preventScrolling: true
    });
  }

}
