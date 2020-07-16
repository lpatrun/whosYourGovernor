import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { County } from './county.model';
import { Town } from './town.model';
import { TownGovernor } from './town-governor.model';
import { CountyGovernor } from './county-governor.model';

export class DataService implements OnInit {
  private counties: County[] = [];
  countiesSub = new Subject<County[]>();
  private townsCommunities: Town[] = [];
  townComSub= new Subject<Town[]>();

  townGovernor = new Subject<TownGovernor>();
  countyGowernor = new Subject<CountyGovernor>();

  selectedLanguage = new Subject<string>();

  

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  toFetchCounties() {
    this.http.get<{ [counties: string]: County[] }>(
      'https://tehcon.com.hr/api/CroatiaTownAPI/list.php?v=1&entityType=1'
    ).pipe(
      map( fetchedPosts => {
        this.counties = fetchedPosts.counties;
        this.countiesSub.next(fetchedPosts.counties);
      })
    ).subscribe();
  }

  toFetchTowns() {
    this.http.get<{ [towns: string]: Town[] }>(
      'https://tehcon.com.hr/api/CroatiaTownAPI/list.php?v=1&entityType=2'
    ).pipe(
      map( fetchedPosts => {
        this.townsCommunities = [...this.townsCommunities, ...fetchedPosts.towns];
        this.townComSub.next(fetchedPosts.towns);
      })
    ).subscribe();
  }

  toFetchComunities() {
    this.http.get<{ [communities: string]: Town[] }>(
      'https://tehcon.com.hr/api/CroatiaTownAPI/list.php?v=1&entityType=3'
    ).pipe(
      map( fetchedPosts => {
        this.townsCommunities = [...this.townsCommunities, ...fetchedPosts.communities];
        this.townComSub.next(fetchedPosts.communities);
      })
    ).subscribe();
  }

  toGetTownGovernor(entityType: number, ID: number) {
    this.http.get<TownGovernor>(
      'https://tehcon.com.hr/api/CroatiaTownAPI/details.php?v=1&entityType=' + entityType + '&ID=' + ID
    ).subscribe(data => {
      this.townGovernor.next(data);
    });
  }

  toGetCountyGovernor(entityType: number, ID: number) {
    this.http.get<CountyGovernor>(
      'https://tehcon.com.hr/api/CroatiaTownAPI/details.php?v=1&entityType=' + entityType + '&ID=' + ID
    ).subscribe(data => {
      this.countyGowernor.next(data);
    });
  }

  toChangeLang(language: string) {
    this.selectedLanguage.next(language);
  }
}