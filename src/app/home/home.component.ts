import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Summoner } from '../shared/summoner';
import { SummonersService } from '../services/summoners.service';
import { LolApiService } from '../services/lol-api.service';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  summonerList: Summoner[];
  summonerDetails$: Observable<any>;

  constructor(private summonerService: SummonersService, private lolAPIService: LolApiService) { }

  ngOnInit(): void {
    this.summonerList = this.summonerService.getSummonersList();

    const summonersListObservable = from(this.summonerList);

    summonersListObservable.subscribe((summoner) => {
      // this.lolAPIService.getSummonerInfo(summoner).subscribe((data) => {console.log(data) });
    });
  }

}
