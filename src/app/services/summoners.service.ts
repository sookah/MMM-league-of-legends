import { Injectable } from '@angular/core';
import { Summoner } from '../shared/summoner';
@Injectable({
  providedIn: 'root'
})
export class SummonersService {

  summonersList: Summoner[] = [
    { name: 'Dank Knight 64' },
    { name: 'jrKarki' },
    { name: 'Eternal Phase' },
    { name: 'Doctor Player' },
    { name: 'Dr Poudel' },
    { name: 'zxonrust' },
    { name: 'redkozak' },
  ];

  constructor() { }

  getSummonersList(): Summoner[] {
    return this.summonersList;
  }
}
