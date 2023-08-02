import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of, Observable } from 'rxjs';
import { mergeMap, tap, map } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';
import * as fromStore from '../../../core/store/app.reducer';
import { FirebaseService } from '../../../core/firebase/firebase.service';
import { EffectsHelpers } from '../../../core/store/effects.helpers';
import { EditSurveyState } from './edit-survey.state';

import { ActionFlow, RouterNavigate, LoadAction, Unsubscribe } from '../../../core/store/app.actions';
import { EditSurveyActionTypes, Cleanup, LoadData } from './edit-survey.actions';

@Injectable()
export class EditSurveyEffects {
  /** Load data from Firebase. */
  loadData$: Observable<Action> = createEffect(
    () => this.actions$.pipe(
      ofType<LoadData>(EditSurveyActionTypes.LOAD_DATA),
      mergeMap((action: LoadData) => {
        const loadId = action.correlationId;

        return [
        ];
      }),
    ),
  );

  /** Unsubscribe connections from Firebase. */
  cleanup$: Observable<Action> = createEffect(
    () => this.actions$.pipe(
      ofType<Cleanup>(EditSurveyActionTypes.CLEANUP),
      map((action: Cleanup) => new Unsubscribe(action.payload.containerId)),
    ),
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromStore.State>,
    private state: EditSurveyState,
    private db: FirebaseService,
    private eh: EffectsHelpers,
  ) {}
}
