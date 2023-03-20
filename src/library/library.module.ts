import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryFeatureComponent } from './library-feature/library-feature.component';
import { LibraryFeatureService } from './library-feature/library-feature.service';

@NgModule({
  imports: [CommonModule],
  declarations: [LibraryFeatureComponent],
  exports: [LibraryFeatureComponent],
  providers: [LibraryFeatureService],
})
export class LibraryModule {}
