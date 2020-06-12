import { Component } from '@angular/core';

import {
  faCoffee,
  faBars,
  faTimes,
  faEdit,
  faSort,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'IEsupport';
  faCoffee = faCoffee;
  faBars = faBars;
  faTimes = faTimes;
  faEdit = faEdit;
  faSort = faSort;
}
