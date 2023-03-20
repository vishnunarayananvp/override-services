import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LibraryModule } from '../library/library.module';
import { TransfersModule } from '../transfers/transfers.module';
import { IssuesModule } from '../issues/issues.module';

@NgModule({
  imports: [BrowserModule, FormsModule, TransfersModule, IssuesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
