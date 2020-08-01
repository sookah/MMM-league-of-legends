import { Component, OnInit } from '@angular/core';
import { Summoner } from '../../shared/summoner';
import { SummonersService } from '../../services/summoners.service';
@Component({
  selector: 'app-boys-list',
  templateUrl: './boys-list.component.html',
  styleUrls: ['./boys-list.component.scss']
})
export class BoysListComponent implements OnInit {
  summonersList: Summoner[];
  constructor(private summonerService: SummonersService) { }

  ngOnInit(): void {
    this.summonersList = this.summonerService.getSummonersList();
  }

}
