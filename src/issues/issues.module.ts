import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from './issues.component';
import { LibraryModule } from '../library/library.module';
import { LibraryFeatureService } from '../library/library-feature/library-feature.service';
import { IssuesService } from './issues.service';

@NgModule({
  imports: [CommonModule, LibraryModule],
  declarations: [IssuesComponent],
  exports: [IssuesComponent],
  // providers: [
  //   {
  //     provide: LibraryFeatureService,
  //     useClass: IssuesService,
  //   },
  // ],
})
export class IssuesModule {}
