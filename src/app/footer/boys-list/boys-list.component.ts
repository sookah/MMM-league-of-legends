import { Component, OnInit } from '@angular/core';
import { Summoner } from '../../shared/summoner';
@Component({
  selector: 'app-boys-list',
  templateUrl: './boys-list.component.html',
  styleUrls: ['./boys-list.component.scss']
})
export class BoysListComponent implements OnInit {
  summonersList: Summoner;
  constructor() { }

  ngOnInit(): void {
  }

}
