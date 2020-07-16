import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'governor';

  constructor(private dataService: DataService,
      private translate: TranslateService
    ) { 
      translate.addLangs(['hr', 'en']);
      translate.setDefaultLang('hr');
    }

  ngOnInit() {
    if(localStorage.getItem('language')){
      let storedLang = localStorage.getItem('language');
      this.dataService.toChangeLang(storedLang);
      this.translate.use(storedLang);
    } else {
      localStorage.setItem('language', 'hr');
      this.dataService.toChangeLang('hr');
    }
    this.dataService.toFetchCounties();
    this.dataService.toFetchTowns();
    this.dataService.toFetchComunities();
    this.dataService.selectedLanguage.subscribe( (language: string) => {
      this.translate.use(language);
    })
  }
}
