import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../core/store/app.reducer';
import { EntitySelectorService } from '../../../core/store/app.selectors';

import { Observable, of, combineLatest } from 'rxjs';
import { bufferTime, distinctUntilChanged, shareReplay, mergeMap, filter, switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EditSurveySelectors {
  constructor(
    private slRx: EntitySelectorService,
  ) { }

  cleanup(cId: string) {
    this.slRx.release(cId);
  }
}
