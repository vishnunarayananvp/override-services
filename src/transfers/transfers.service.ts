import { Inject, Injectable } from '@angular/core';
import { LIBRARY_TOKEN } from '../library/core/library-token';
import { LibraryFeatureService } from '../library/library-feature/library-feature.service';

@Injectable()
export class TransfersService extends LibraryFeatureService {
  constructor(@Inject(LIBRARY_TOKEN) protected readonly token) {
    super(token);
  }
  name = 'transfers service';
}
