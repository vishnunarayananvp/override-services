import { Inject, Injectable } from '@angular/core';
import { LIBRARY_TOKEN } from '../core/library-token';

@Injectable()
export class LibraryFeatureService {
  constructor(@Inject(LIBRARY_TOKEN) protected readonly token) {}

  name = 'library feature service';
  tokenValue = this.token.value;
}
