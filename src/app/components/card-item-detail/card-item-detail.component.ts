import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { CountryService } from 'src/app/services/country.service';
import { CountryInfo, CurrencyInfo, LanguageInfo } from 'src/app/models/country-info';

@Component({
  selector: 'app-card-item-detail',
  templateUrl: './card-item-detail.component.html',
  styleUrls: ['./card-item-detail.component.scss']
})
export class CardItemDetailComponent implements OnInit {

  constructor(
    private countryService: CountryService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  public selectedCountryCode: string = null;
  public selectedCountry: CountryInfo = null;
  public borderCountryList: CountryInfo[] = [];
  public isDarkMode: boolean = false;
  public faLongArrowAltLeft = faLongArrowAltLeft;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if ((params != null) && (params.has('code'))) {
        this.selectedCountryCode = params.get('code');
        this.setSelectedCountry(this.selectedCountryCode);
      }
    });

    //better to handle this in state management
    let isDarkMode = JSON.parse(sessionStorage.getItem('darkMode'));
    this.isDarkMode = (isDarkMode != null) ? isDarkMode : false;
  }

  public setSelectedCountry(code: string) {
    this.countryService.getCountry(code).subscribe(country => {
      this.selectedCountry = country;

      if (this.selectedCountry != null) {
        //check for border countries
        this.setBorderCountries(this.selectedCountry.borders);
      }
    });
  }

  public setBorderCountries(borderCodes: string[]) {
    if ((borderCodes == null) || (borderCodes.length == 0)) return;

    this.countryService.getCountryListByCode(borderCodes).subscribe(countries => {
      this.borderCountryList = countries;
    });
  }

  public toggleDarkMode(mode: boolean) {
    this.isDarkMode = mode;
  }

  public getPopulationString(value: number) : string {
    return (value != null) ? value.toLocaleString('en') : '';
  }

  public getTopLevelDomainsDisplayText(list: string[]) : string {
    let displayText = '';

    list && list.forEach(item => {
      displayText += item ? item : '';
    });

    return displayText;
  }

  public getCurrenciesDisplayText(list: CurrencyInfo[]) : string {
    let displayText = '';
    let firstItemAdded = false;

    list && list.forEach(item => {
      if (!firstItemAdded) {
        //add the item without comma
        displayText += item ? item.name : '';
        firstItemAdded = true;
      } else {
        //add the item with comma prefix
        displayText += item ? `, ${item.name}` : '';
      }
    });

    return displayText;
  }

  public getLanguagesDisplayText(list: LanguageInfo[]) : string {
    let displayText = '';
    let firstItemAdded = false;

    list && list.forEach(item => {
      if (!firstItemAdded) {
        //add the item without comma
        displayText += item ? item.name : '';
        firstItemAdded = true;
      } else {
        //add the item with comma prefix
        displayText += item ? `, ${item.name}` : '';
      }
    });
    return displayText;
  }

  public handleBackClick() {
    this.router.navigate(['/']);
  }

  public handleBorderClick(code: string) {
    this.router.navigate(['/country/', code]);
  }

}
