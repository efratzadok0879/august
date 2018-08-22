import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  term: string;
  @Output()
  termEvent: EventEmitter<string>;
  constructor() {
    this.termEvent = new EventEmitter<string>();
  }

  ngOnInit() {
  }
  termChanged() {
    this.termEvent.emit(this.term);
  }

}
