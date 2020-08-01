import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summoner } from '../shared/summoner';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LolApiService {

  private RIOT_API_URL = 'https://euw1.api.riotgames.com';
  private RIOT_SUMMONER_URL = 'lol/summoner/v4/summoners';
  constructor(private http: HttpClient) { }

  getSummonerInfo(summoner: Summoner): Observable<any> {
    return this.http.get(`${this.RIOT_API_URL}/${this.RIOT_SUMMONER_URL}/by-name/${summoner.name}?api_key=${environment.RIOT_API_DEV_KEY}`);
  }


}
