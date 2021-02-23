import { Component, Input, OnInit } from '@angular/core';
import { CountryInfo } from 'src/app/models/country-info';
import { FilterInfo } from 'src/app/models/filter-info';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor() { }

  @Input() public countryList: CountryInfo[] = [];
  @Input() public isDarkMode: boolean = false;
  
  public filterCriteria: FilterInfo = null;
  @Input('filterCriteria') public set _filterCriteria(value: FilterInfo) {
    this.filterCriteria = value;
  }

  ngOnInit(): void {
  }

}
