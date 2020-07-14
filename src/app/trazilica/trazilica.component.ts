import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { County } from '../shared/county.model';
import { Town } from '../shared/town.model';
import { DataService } from '../shared/data.service';
import { TownGovernor } from '../shared/town-governor.model';
import { CountyGovernor } from '../shared/county-governor.model';

@Component({
  selector: 'app-trazilica',
  templateUrl: './trazilica.component.html',
  styleUrls: ['./trazilica.component.scss']
})
export class TrazilicaComponent implements OnInit {
  @ViewChild('f') governorSearch: NgForm;

  counties: County[] = [];
  listCountiesMainContainer: Array<string> = [];
  listCounties: Array<string> = [];
  townsComunities: Town[] = [];
  listTownsComunitiesMainContainer: Array<string> = [];
  listTownsComunities: Array<string> = [];
  townGovernor: TownGovernor;
  countyGovernor: CountyGovernor;
  countyDropdown: boolean = false;
  townComunityDropdown: boolean = false;
  isFormValid: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.countiesSub.subscribe((counties: County[]) => {
      this.counties = counties;
      this.populatelistCounties(counties);
    });
    this.dataService.townComSub.subscribe((townsComunities: Town[]) => {
      this.townsComunities = [...this.townsComunities, ...townsComunities];
      this.populatelistTownsComunities(townsComunities);
    });
    this.dataService.townGovernor.subscribe((governor: TownGovernor) => {
      this.townGovernor = governor;
    });
    this.dataService.countyGowernor.subscribe((countyGuverner: CountyGovernor) => {
      this.countyGovernor = countyGuverner;
    });
  }

  populatelistCounties(counties) {
    counties.forEach(element => this.listCounties.push(element.name));
    this.listCounties = this.sortAlphabetically(this.listCounties);
    this.listCountiesMainContainer = this.listCounties;
  }

  populatelistTownsComunities(townsAndCommunities) {
    townsAndCommunities.forEach(element => this.listTownsComunitiesMainContainer.push(element.name));
    this.listTownsComunitiesMainContainer = this.sortAlphabetically(this.listTownsComunitiesMainContainer);
    this.listTownsComunities = this.listTownsComunitiesMainContainer;
  }

  sortAlphabetically(array) {
    return array.sort(function (a, b) {
      return a.localeCompare(b);
    });
  }

  selectCounty(county: string) {
    this.governorSearch.form.patchValue({
      zupanija: county
    });
    this.onCountyKeyUp(county);
    this.toggleCountyDropdown();
    this.isFormValid = true;
  }

  selectTownComunity(item: string) {
    this.governorSearch.form.patchValue({
      gradOpcina: item
    });
    this.ontowComUp(item);
    this.toggleTownComunityDropown();
    this.isFormValid = true;
  }

  findTownID(town: string) {
    const townCommunity = this.townsComunities.find(element => element.name === town);
    this.dataService.toGetTownGovernor(townCommunity.entityType, townCommunity.ID);
  }

  findCountyID(county: string) {
    const countyObject = this.counties.find(element => element.name === county);
    this.dataService.toGetCountyGovernor(countyObject.entityType, countyObject.ID);
  }

  toggleCountyDropdown() {
    this.countyDropdown = !this.countyDropdown;
  }

  toggleTownComunityDropown() {
    this.townComunityDropdown = !this.townComunityDropdown;
  }

  onCountyKeyUp(value: string) {
    let inputIsValid: boolean = this.validateCountyInput(value);
    // filtriranje kroz popis županija za padajuću listu
    if (value.trim() == "") {
      this.listCounties = this.listCountiesMainContainer;
    } else {
      value = value.trim().toUpperCase();
      this.listCounties = this.listCountiesMainContainer.filter(item => item.startsWith(value));
    }

    if (value == "") {
      this.listTownsComunities = [];
      this.townsComunities.forEach(element => this.listTownsComunities.push(element.name));
      this.listTownsComunities.sort(function (a, b) {
        return a.localeCompare(b);
      });
    }
    else if (inputIsValid) {
      this.isFormValid = true;
      this.listTownsComunities = [];
      const selectedCounty = this.counties.find(element => element.name === value);
      this.townsComunities.forEach(element => {
        if (element.countyID === selectedCounty.ID) {
          this.listTownsComunities.push(element.name);
        }
      })
      this.listTownsComunities.sort(function (a, b) {
        return a.localeCompare(b);
      });
    }
    //čišćenje inputa za grad/općinu ukoliko je novounešena županija ispravna
    if (inputIsValid && this.governorSearch.form.value.gradOpcina != "" || this.governorSearch.form.value.gradOpcina != undefined) {
      this.governorSearch.form.patchValue({
        gradOpcina: null
      });
    }
    if (!inputIsValid) {
      this.isFormValid = false;
    }
  }

  validateCountyInput(value: string) {
    value = value.toUpperCase();
    return this.counties.find(element => element.name === value) ? true : false;
  }

  ontowComUp(value: string) {
    const townCommunityInputIsValid = this.validateTownComInput(value);
    // filtriranje kroz popis gradova/opcina za padajuću listu
    if (value.trim() == "") {
      this.listTownsComunities = this.listTownsComunitiesMainContainer;
    } else {
      value = value.trim();
      value = value.charAt(0).toUpperCase() + value.slice(1)
      this.listTownsComunities = this.listTownsComunitiesMainContainer.filter(item => item.startsWith(value));
      if (townCommunityInputIsValid) {
        value = value.trim().toLowerCase();
        value = value.charAt(0).toUpperCase() + value.slice(1)
        const countyFill = this.townsComunities.find(element => element.name === value);
        this.governorSearch.form.patchValue({
          zupanija: countyFill.countyName
        });
        this.isFormValid = true;
      }
    }
    if (!townCommunityInputIsValid) {
      this.isFormValid = false;
    }
  }

  validateTownComInput(value: string) {
    value = value.trim().toLowerCase();
    value = value.charAt(0).toUpperCase() + value.slice(1)
    return this.townsComunities.find(element => element.name === value) ? true : false;
  }

  getCountyValue() {
    return this.governorSearch.value.zupanija;
  }

  onSubmit() {
    this.townGovernor = null;
    this.countyGovernor = null;
    if (this.governorSearch.value.zupanija && !this.governorSearch.value.gradOpcina) {
      this.findCountyID((this.governorSearch.value.zupanija).toUpperCase());
    }
    if (this.governorSearch.value.gradOpcina || this.governorSearch.value.zupanija && this.governorSearch.value.gradOpcina) {
      let searchValue = this.governorSearch.value.gradOpcina;
      searchValue = searchValue.toLowerCase();
      searchValue = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
      this.findTownID(searchValue);
    }
    this.governorSearch.reset()
    this.isFormValid = false;
    this.listCounties = this.listCountiesMainContainer;
    this.listTownsComunities = this.listTownsComunitiesMainContainer;
  }
}

