import { Injectable } from '@angular/core';
import {Team} from "../models/team"

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  team:Team[]=[
    new Team(0,"Harish","Coder","https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJoker_(The_Dark_Knight)&psig=AOvVaw1jIz-W9i-uTbKrUjdpnFEF&ust=1594714762790000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDA7rvlyeoCFQAAAAAdAAAAABAD"),

    new Team(1,"Bharath","funny guy","https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJoker_(The_Dark_Knight)&psig=AOvVaw1jIz-W9i-uTbKrUjdpnFEF&ust=1594714762790000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDA7rvlyeoCFQAAAAAdAAAAABAD"),

    new Team(2,"asdsad","funny guy","https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJoker_(The_Dark_Knight)&psig=AOvVaw1jIz-W9i-uTbKrUjdpnFEF&ust=1594714762790000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDA7rvlyeoCFQAAAAAdAAAAABAD"),

    new Team(3,"asdasdsada","funny guy","https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJoker_(The_Dark_Knight)&psig=AOvVaw1jIz-W9i-uTbKrUjdpnFEF&ust=1594714762790000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDA7rvlyeoCFQAAAAAdAAAAABAD")


  ]
  constructor() { }

  getteam():Team[]{
    return this.team
  }
}
