import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMoon as fasMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as farMoon} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public fasMoon = fasMoon;
  public farMoon = farMoon;

  @Input() public isDarkMode: boolean = false;

  @Output() darkModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  
  constructor() { }

  ngOnInit(): void {
    
  }

  public toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    sessionStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
    

    if (this.darkModeChange != null) this.darkModeChange.emit(this.isDarkMode);
  }


}
