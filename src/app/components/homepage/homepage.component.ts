import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { CountryInfo } from 'src/app/models/country-info';
import { FilterInfo } from 'src/app/models/filter-info';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  constructor(public countryService: CountryService) { }

  public isDarkMode: boolean = false;
  public countryList: CountryInfo[] = [];
  public filterCriteria: FilterInfo = null;

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(countries => {
      this.countryList = countries;
    });

    //better to handle this in state management
    let isDarkMode = JSON.parse(sessionStorage.getItem('darkMode'));
    this.isDarkMode = (isDarkMode != null) ? isDarkMode : false;
  }

  public toggleDarkMode(mode: boolean) {
    this.isDarkMode = mode;
  }

  public handleFilterChange(filter: FilterInfo) {
    this.filterCriteria = { ...filter };
  }

}
