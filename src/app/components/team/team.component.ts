import { Component, OnInit, Input } from '@angular/core';
import {Team} from "src/app/models/team"

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() Teams : Team

  constructor() { }

  ngOnInit(): void {
  }

}
