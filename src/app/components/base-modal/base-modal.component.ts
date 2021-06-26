import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { CountryInfo } from 'src/app/models/country-info';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent implements OnInit {

  public country: CountryInfo;
  public faTimesCircle = faTimesCircle;
  public displayModal: boolean = false;

  @Input()
  public set DisplayModal(value: boolean) {
    if (value) {
      this.showModal();
    } else {
      this.closeModal();
    }
  }

  @Output() addCountry: EventEmitter<CountryInfo> = new EventEmitter<CountryInfo>();
  
  constructor() { }

  ngOnInit(): void {
    this.country = {} as CountryInfo;
  }

  public add() {
    if (this.addCountry) this.addCountry.emit(this.country);
    this.closeModal();
  }

  public showModal() {
    this.displayModal = true;
  }

  public closeModal() {
    this.displayModal = false;
  }

}
