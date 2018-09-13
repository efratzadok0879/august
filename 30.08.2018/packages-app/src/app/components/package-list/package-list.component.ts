import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../shared/services/package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: any[] = [];
  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.packageService.NameSubject.subscribe(
      {
        next: (packageInputVal: string) => this.getAllPackages(packageInputVal)
      }
    );
    this.packageService.DateRangeSubject.subscribe(
      {
        next: (range: { start: string, end: string }) => this.getDownloadAmounts(range)
      }
    );

  }
  getAllPackages(packageInputVal: string) {
    if (packageInputVal) {
      this.packageService.getAllPackages(packageInputVal).subscribe(
        res => {
          this.packages = [];
          res.forEach(p => {
            this.packages.push({ name: p.package.name });
          })
          this.packageService.serviceSubject.next();
        }
      );
    }
    else
    this.packages=[];
  }
  getDownloadAmounts(range: { start: string, end: string }) {
    this.packages.forEach(p => {
      this.packageService.getDownloadAmounts(range.start, range.end, p.name).subscribe(
        res => p.downloads = res.downloads
      );
    });
  }

}
