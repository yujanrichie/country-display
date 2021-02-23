import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FilterInfo } from 'src/app/models/filter-info';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  constructor() { }

  public faSearch = faSearch;
  public filterCriteria: FilterInfo = null;
  public readonly regionOptions: string[] = [
    'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
  ];

  @Input() public isDarkMode: boolean = false;

  @Output() filterChange: EventEmitter<FilterInfo> = new EventEmitter<FilterInfo>();

  ngOnInit(): void {
    this.resetFilterCriteria();
  }

  public handleSearchChange() {
    this.handleFilterCriteriaChange();
  }

  public handleRegionChange() {
    this.handleFilterCriteriaChange();
  }

  private resetFilterCriteria() {
    this.filterCriteria = {
      searchInput: null,
      region: null
    };
  }

  private handleFilterCriteriaChange() {
    if (this.filterChange != null) {
      this.filterChange.emit(this.filterCriteria);
    }
  }

}
