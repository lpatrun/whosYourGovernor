import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }

  selectedLanguage = 'hr';

  useLang(language) {
    this.dataService.toChangeLang(language);
    localStorage.setItem('language', language);
    this.selectedLanguage = language;
  }

  ngOnInit() {
    if(localStorage.getItem('language')){
      this.selectedLanguage = localStorage.getItem('language');
    }
  }

}
