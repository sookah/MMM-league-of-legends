import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Summoner } from '../shared/summoner';
import { SummonersService } from '../services/summoners.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  summonerList: Summoner[];

  constructor(private summonerService: SummonersService) { }

  ngOnInit(): void {
    this.summonerList = this.summonerService.getSummonersList();
  }

}
