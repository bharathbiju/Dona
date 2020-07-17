import { Component, OnInit } from '@angular/core';
import {TeamService} from 'src/app/service/team.service'
import {Team} from 'src/app/models/team'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  Teams:Team[]=[]

  constructor(private TeamService:TeamService) { }

  ngOnInit(): void {
    this.Teams=this.TeamService.getteam(); 
  }

}
