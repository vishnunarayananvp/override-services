import { Component, OnInit } from '@angular/core';
import { LibraryFeatureService } from './library-feature.service';

@Component({
  selector: 'app-library-feature',
  templateUrl: './library-feature.component.html',
  styleUrls: ['./library-feature.component.css'],
})
export class LibraryFeatureComponent implements OnInit {
  constructor(private readonly libraryFeatureService: LibraryFeatureService) {}

  name = this.libraryFeatureService.name;
  token = this.libraryFeatureService.tokenValue;

  ngOnInit() {
    console.error('sdsd', this.libraryFeatureService.tokenValue);
  }
}
