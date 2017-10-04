import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
obs = {
	'name' : "Sazzad",
	'age' :'24'
};

marks = [2,3,4,5,6,6,7];

}
