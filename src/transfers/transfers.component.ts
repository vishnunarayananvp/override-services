import { Component, OnInit } from '@angular/core';
import { LibraryFeatureService } from '../library/library-feature/library-feature.service';
import { TransfersService } from './transfers.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css'],
  providers: [
    {
      provide: LibraryFeatureService,
      useClass: TransfersService,
    },
  ],
})
export class TransfersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
} 
