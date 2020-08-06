import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  searchForm: FormGroup;

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
    this.dataService.countiesSub.subscribe(
      (counties: County[]) => this.counties = counties);

    this.dataService.townComSub.subscribe(
      (townsComunities: Town[]) => {
        this.town = [...this.town, ...townsComunities];
        this.townMainContainer = [...this.town];
      });

    this.dataService.countyGowernor.subscribe(
      (countyGuverner: CountyGovernor) => this.countyGovernor = countyGuverner);

    this.dataService.townGovernor.subscribe(
      (governor: TownGovernor) => this.townGovernor = governor);

    this.searchForm = new FormGroup({
      'county': new FormControl(),
      'town': new FormControl(),
    });

    this.searchForm.get('county').valueChanges.subscribe(
      value => this.getZupanija(value)
    )

    this.searchForm.get('town').valueChanges.subscribe(
      value => this.getOpcina(value)
    )
  }

  getZupanija(zupanija: string): void {
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
    if (this.searchForm.value.town !== null && this.searchForm.value.town !== undefined) {
      if (this.findCounty(this.searchForm.value.town) != zupanija) {
        this.searchForm.patchValue({ 'town': "" });
        this.countyAutoSelect();
      }
    }
  }

  //jel pojam upisan u prvu kucicu valjan
  countyExists(zupanija: string): boolean {
    return this.counties.find(item => item.name === zupanija) ? true : false;
  }

  findCounty(opcina: string): string {
    if (opcina) {
      let opcinaObjekt = this.townMainContainer.find(
        item => item.name === opcina
      );
      return opcinaObjekt.countyName;
    } else {
      return;
    }
  }

  getOpcina(opcina: string): void {
    if (this.opcinaExists(opcina)) {
      this.validTown = true;
      const zupanija = this.townMainContainer.find(
        item => item.name === opcina
      );
      this.searchForm.patchValue({ 'county': zupanija.countyName });
    } else {
      this.validTown = false;
    }
  }

  //valjanost unosa u drugu kucicu
  opcinaExists(opcina: string): boolean {
    return this.townMainContainer.find(item => item.name === opcina) ? true : false;
  }

  countyAutoSelect(): void {
    let data = this.searchForm.get('county').value;
    if (data !== "" || data !== null) {
      this.filteredCounties = this.searchForm.get('county').valueChanges.pipe(
        startWith(""),
        map(value => this._countyFilter(value))
      );
    }
  }

  townComunityAutoSelect(): void {
    this.filteredTown = this.searchForm.get('town').valueChanges.pipe(
      startWith(""),
      map(value => this._townComunityFilter(value))
    );
  }

  private _countyFilter(value: string): County[] {
    if (value !== null) {
      const filterValue = value.toLowerCase();
      return this.counties.filter(
        item => item.name.toLowerCase().indexOf(filterValue) === 0
      );
    }
  }

  private _townComunityFilter(value: string): Town[] {
    if (value !== null) {
      const filterValue = value.toLowerCase();
      return this.town.filter(
        item => item.name.toLowerCase().indexOf(filterValue) === 0
      );
    }
  }

  onSubmit(): void {
    this.townGovernor = null;
    this.countyGovernor = null;

    if (this.searchForm.value.county !== null && this.searchForm.value.town === null || this.searchForm.value.town === "") {
      let zupanijaId = this.counties.find(element => element.name === this.searchForm.value.county);
      this.dataService.toGetCountyGovernor(zupanijaId.entityType, zupanijaId.ID);
      this.entityToDisplay = zupanijaId.name;
    }
    //ako je odabran grad (i zupanija (zupanija se sama doda))
    else if (this.searchForm.value.town !== null && this.searchForm.value.county !== null) {
      let gradID = this.town.find(element => element.name === this.searchForm.value.town);
      this.dataService.toGetTownGovernor(gradID.entityType, gradID.ID);
      this.entityToDisplay = gradID.name;
    }

    this.searchForm.reset();
    this.town = this.townMainContainer;
    this.validCounty = false;
    this.validTown = false;
  }
}
