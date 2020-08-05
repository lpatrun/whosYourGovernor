import { HttpClient } from '@angular/common/http';
import { OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { County } from './county.model';
import { Town } from './town.model';
import { TownGovernor } from './town-governor.model';
import { CountyGovernor } from './county-governor.model';

export class DataService implements OnInit {
  countiesSub = new Subject<County[]>();
  townComSub = new Subject<Town[]>();

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
    ).subscribe(
      fetchedPosts => {
        this.countiesSub.next(fetchedPosts.counties);
      }
    );
  }

  toFetchTowns() {
    this.http.get<{ [towns: string]: Town[] }>(
      'https://tehcon.com.hr/api/CroatiaTownAPI/list.php?v=1&entityType=2'
    ).subscribe(
      fetchedPosts => {
        this.townComSub.next(fetchedPosts.towns);
      }
    );
  }

  toFetchComunities() {
    this.http.get<{ [communities: string]: Town[] }>(
      'https://tehcon.com.hr/api/CroatiaTownAPI/list.php?v=1&entityType=3'
    ).subscribe(
      fetchedPosts => {
        this.townComSub.next(fetchedPosts.communities);
      }
    );
  }

  toGetTownGovernor(entityType: number, ID: number) {
    this.http.get<TownGovernor>(
      'https://tehcon.com.hr/api/CroatiaTownAPI/details.php?v=1&entityType=' + entityType + '&ID=' + ID
    ).subscribe(
      data => this.townGovernor.next(data)
    );
  }

  toGetCountyGovernor(entityType: number, ID: number) {
    this.http.get<CountyGovernor>(
      'https://tehcon.com.hr/api/CroatiaTownAPI/details.php?v=1&entityType=' + entityType + '&ID=' + ID
    ).subscribe(
      data => this.countyGowernor.next(data)
    );
  }

  toChangeLang(language: string) {
    this.selectedLanguage.next(language);
  }
}