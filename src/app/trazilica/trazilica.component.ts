import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
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
  countiesControl: FormControl = new FormControl();
  townControl: FormControl = new FormControl();

  counties: County[] = [];
  filteredCounties: Observable<County[]>;
  townMainContainer: Town[] = [];
  town: Town[] = [];
  filteredTown: Observable<Town[]>;

  countyGovernor: CountyGovernor;
  townGovernor: TownGovernor;
  entityToDisplay: string;

  validCounty: boolean = false;
  validTown: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.countiesSub.subscribe((counties: County[]) => {
      this.counties = counties;
    });
    this.dataService.townComSub.subscribe((townsComunities: Town[]) => {
      this.town = [...this.town, ...townsComunities];
      this.townMainContainer = [...this.town];
    });
    this.dataService.townGovernor.subscribe((governor: TownGovernor) => {
      this.townGovernor = governor;
    });
    this.dataService.countyGowernor.subscribe((countyGuverner: CountyGovernor) => {
      this.countyGovernor = countyGuverner;
    });
  }

  getZupanija(zupanija) {
    if (zupanija == "" || zupanija == undefined || zupanija == null) {
      this.town = this.townMainContainer;
    } else if (this.countyExists(zupanija)) {
      this.validCounty = true;
      this.town = this.townMainContainer.filter(
        item => item.countyName === zupanija
      );
    } else {
      this.validCounty = false;
    }
    if (this.townControl.value !== null && this.townControl.value !== undefined) {
      if (this.findCounty(this.townControl.value) != zupanija) {
        this.townControl.setValue("");
        this.countyAutoSelect();
      }
    }
  }

  //jel pojam upisan u prvu kucicu valjan
  countyExists(zupanija) {
    return this.counties.find(item => item.name === zupanija) ? true : false;
  }

  findCounty(opcina) {
    if (opcina) {
      let opcinaObjekt = this.townMainContainer.find(
        item => item.name === opcina
      );
      return opcinaObjekt.countyName;
    } else {
      return;
    }
  }

  getOpcina(opcina) {
    if (this.opcinaExists(opcina)) {
      this.validTown = true;
      const zupanija = this.townMainContainer.find(
        item => item.name === opcina
      );
      this.countiesControl.setValue(zupanija.countyName);
    } else {
      this.validTown = false;
    }
  }

  //valjanost unosa u prvu kucicu
  opcinaExists(opcina) {
    return this.townMainContainer.find(item => item.name === opcina)
      ? true
      : false;
  }

  countyAutoSelect() {
    this.filteredCounties = this.countiesControl.valueChanges.pipe(
      startWith(""),
      map(value => this._countyFilter(value))
    );
  }

  townComunityAutoSelect() {
    this.filteredTown = this.townControl.valueChanges.pipe(
      startWith(""),
      map(value => this._townComunityFilter(value))
    );
  }

  private _countyFilter(value: string): County[] {
    const filterValue = value.toLowerCase();
    return this.counties.filter(
      item => item.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  private _townComunityFilter(value: string): Town[] {
    const filterValue = value.toLowerCase();
    return this.town.filter(
      item => item.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  onSubmit() {
    this.townGovernor = null;
    this.countyGovernor = null;

    //ako je odabrana samo zupanija
    if (this.countiesControl.value !== null && this.townControl.value === null || this.townControl.value === "") {
      let zupanijaId = this.counties.find(element => element.name === this.countiesControl.value);
      this.dataService.toGetCountyGovernor(zupanijaId.entityType, zupanijaId.ID);
      this.entityToDisplay = zupanijaId.name;
    }
    //ako je odabran grad (i zupanija (zupanija se sama doda))
    else if (this.townControl.value !== null && this.countiesControl.value !== null) {
      let gradID = this.town.find(element => element.name === this.townControl.value);
      this.dataService.toGetTownGovernor(gradID.entityType, gradID.ID);
      this.entityToDisplay = gradID.name;
    }
    this.countiesControl.setValue("");
    this.townControl.setValue("");
    this.town = this.townMainContainer;
    this.validCounty = false;
    this.validTown = false;
  }
}


// prva verzija
/* @ViewChild('f') governorSearch: NgForm;

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
  console.log(this.listTownsComunities);
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
} */