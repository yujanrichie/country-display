import { Pipe, PipeTransform } from '@angular/core';
import { CountryInfo } from 'src/app/models/country-info';
import { FilterInfo } from 'src/app/models/filter-info';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(countryList: CountryInfo[], filter: FilterInfo): CountryInfo[]{ 
    if ((filter == null) || (countryList == null)) {
        return countryList;
    }

    //check region filter
    let filteredByRegion: CountryInfo[] = [];
    if ((filter.region != null) && (filter.region.length > 0)) {
      filteredByRegion = countryList.filter(country => {
        if ((country != null) && (country.region != null)) {
          return (country.region.toLowerCase() === filter.region.toLowerCase());
        }
        return false;
      });
    } else {
      filteredByRegion = [].concat(countryList);
    }

    //check search filter
    let filteredBySearch: CountryInfo[] = [];
    if ((filter.searchInput != null) && (filter.searchInput.length > 0)) {
      filteredBySearch = filteredByRegion.filter(country => {
        if ((country != null) && (country.name != null)) {
          return country.name.toLowerCase().includes(filter.searchInput.toLowerCase());
        }
        return true;
      });
    } else {
      filteredBySearch = [].concat(filteredByRegion);
    }

    return filteredBySearch;
  }

}
