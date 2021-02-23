import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CountryInfo, CurrencyInfo, LanguageInfo } from 'src/app/models/country-info';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  /**
   * Makes a _GET HTTP request to the json server
   * 
   * @param {string} route - The path of the endpoint to be requested
   */
  private get(route: string): Observable<any> {
    const url = 'https://restcountries.eu/rest/v2/' + route;
    const headers = new HttpHeaders({
        'Accept': 'application/json'
    });

    return this.http.get(url, {headers: headers});
  }

  public getAllCountries(): Observable<any> {
    return this.get('all').pipe(
      map((data) => {
        if (data == null) { return null; }

        //map server response data to client data
        return this.getMappedCountryList(data);
      })
    );
  }

  public getCountry(countryCode: string): Observable<any> {
    let route = `alpha/${countryCode}`;
    return this.get(route).pipe(
      map((data) => {
        if (data == null) { return null; }

        //map server response data to client data
        return this.getMappedCountryInfo(data);
      })
    );
  }

  public getCountryListByCode(countryCodes: string[]): Observable<any> {
    if (countryCodes == null) return null;

    let route = 'alpha?codes=';

    for (let index = 0; index < countryCodes.length; index++) {
      if (index === (countryCodes.length - 1)) {
        //last code found, do not include semi-colon
        route+= `${countryCodes[index]}`;
      } else {
        route+= `${countryCodes[index]};`;
      }
    }

    return this.get(route).pipe(
      map((data) => {
        if (data == null) { return null; }

        //map server response data to client data
        return this.getMappedCountryList(data);
      })
    );
  }


  private getMappedCountryInfo(data: any): CountryInfo {
    if (data == null) return;

    let newCountryInfo: CountryInfo = {
      alphaCode: data.alpha3Code,
      flagURL: data.flag,
      name: data.name,
      nativeName: data.nativeName,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      topLevelDomains: data.topLevelDomain || [],
      borders: data.borders || [],
      currencies: this.getMappedCurrencyList(data.currencies),
      languages: this.getMappedLanguageList(data.languages)
    }

    return newCountryInfo;
  }

  private getMappedCountryList(list: any[]): CountryInfo[] {
    if (list == null) return null;

    let mappedCountryList: CountryInfo[] = [];

    list.forEach(country => {
      if (country == null) return;

      mappedCountryList.push(this.getMappedCountryInfo(country));
    });

    return mappedCountryList;
  }

  private getMappedCurrencyList(list: any[]): CurrencyInfo[] {
    if (list == null) return null;

    let mappedCurrencyList: CurrencyInfo[] = [];

    list.forEach(currency => {
      if (currency == null) return;
      
      let newCurrency: CurrencyInfo = {
        code: currency.code,
        name: currency.name,
        symbol: currency.symbol
      };

      mappedCurrencyList.push(newCurrency);
    });

    return mappedCurrencyList;
  }

  private getMappedLanguageList(list: any[]): LanguageInfo[] {
    if (list == null) return null;

    let mappedLanguageList: LanguageInfo[] = [];

    list.forEach(language => {
      if (language == null) return;
      
      let newLanguage: LanguageInfo = {
        name: language.name,
        nativeName: language.nativeName
      };

      mappedLanguageList.push(newLanguage);
    });

    return mappedLanguageList;
  }
}
