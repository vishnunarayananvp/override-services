import { Component, OnInit } from '@angular/core';
import { LIBRARY_TOKEN } from '../library/core/library-token';
import { LibraryFeatureService } from '../library/library-feature/library-feature.service';
import { IssuesService } from './issues.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
  providers: [
    {
      provide: LibraryFeatureService,
      useClass: IssuesService,
    },
    {
      provide: LIBRARY_TOKEN,
      useValue: {
        value: 'issue token',
      },
    },
  ],
})
export class IssuesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
