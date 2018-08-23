import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../imports';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css']
})
export class CountryItemComponent implements OnInit {

  @Input()
  country:Country;
  @Input()
  index:number;
  color:string="#ffffff36";
  constructor() { }

  ngOnInit() {
  }

}
