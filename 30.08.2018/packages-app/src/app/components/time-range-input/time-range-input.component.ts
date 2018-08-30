import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PackageService } from '../../shared/services/package.service';

@Component({
  selector: 'app-time-range-input',
  templateUrl: './time-range-input.component.html',
  styleUrls: ['./time-range-input.component.css']
})
export class TimeRangeInputComponent implements OnInit {

  dateRangeGroup: FormGroup;

  constructor(private packageService: PackageService) {
    this.dateRangeGroup = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
  }

  ngOnInit() {
    this.packageService.serviceSubject.subscribe(
      {
        next: () => this.callNext()
      }
    );
  }
  callNext() {
    let startVal: string = this.dateRangeGroup.get("start").value;
    let endVal: string = this.dateRangeGroup.get("end").value;
    if (startVal && endVal&&this.isValideRange())
      this.packageService.DateRangeSubject.next({ start: startVal, end: endVal });

  }
  
  isValideRange(): boolean {
    if(this.dateRangeGroup.controls['start'].value!=null&&this.dateRangeGroup.controls['end'].value!=null)
      return new Date(this.dateRangeGroup.controls['start'].value) <= new Date(this.dateRangeGroup.controls['end'].value);
 return true;
    }

}

