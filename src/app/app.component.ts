import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';
import { County } from './shared/county.model';
import { Town } from './shared/town.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'governor';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.toFetchCounties();
    this.dataService.toFetchTowns();
    this.dataService.toFetchComunities();
  }
}
