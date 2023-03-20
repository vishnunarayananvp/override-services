import { InjectionToken } from '@angular/core';

export const LIBRARY_TOKEN = new InjectionToken('LIBRARY_TOKEN', {
  providedIn: 'root',
  factory: () => {
    return {
      value: 'Token base value',
    };
  },
});
