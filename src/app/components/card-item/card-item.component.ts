import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryInfo } from 'src/app/models/country-info';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() public countryInfo: CountryInfo = null;
  @Input() public isDarkMode: boolean = false;


  ngOnInit(): void {
  }

  public getPopulationString(value: number) : string {
    return (value != null) ? value.toLocaleString('en') : '';
  }

  public handleClick(code: string) {
    this.router.navigate(['/country/', code]);
    
  }

}
