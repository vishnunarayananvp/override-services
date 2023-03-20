import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfersComponent } from './transfers.component';
import { LibraryModule } from '../library/library.module';
import { TransfersService } from './transfers.service';
import { LibraryFeatureService } from '../library/library-feature/library-feature.service';

@NgModule({
  imports: [CommonModule, LibraryModule],
  declarations: [TransfersComponent],
  exports: [TransfersComponent],
  // providers: [
  //   {
  //     provide: LibraryFeatureService,
  //     useClass: TransfersService,
  //   },
  // ],
})
export class TransfersModule {}
