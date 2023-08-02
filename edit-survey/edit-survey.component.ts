import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { EditSurveyAnimations } from './edit-survey.animations';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../core/store/app.reducer';
import * as fromAuth from '../../core/store/auth/auth.reducer';
import { FirebaseService } from '../../core/firebase/firebase.service';
import { Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { withLatestFrom, take, takeUntil } from 'rxjs/operators';

import { EditSurveyState } from './+state/edit-survey.state';
import { EditSurveySelectors } from './+state/edit-survey.selectors';

import { LoadData, Cleanup } from './+state/edit-survey.actions';
import { RouterNavigate } from '../../core/store/app.actions';

import { User } from '../../core/store/user/user.model';

@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: EditSurveyAnimations,
})
export class EditSurveyComponent implements OnInit, OnDestroy {
  // --------------- ROUTE PARAMS & CURRENT USER ---------


  // --------------- LOCAL UI STATE ----------------------


  // --------------- DB ENTITY DATA ----------------------

  /** Container id for selectors and loading. */
  containerId: string = this.db.createId();

  // --------------- DATA BINDING STREAMS ----------------


  // --------------- EVENT BINDING STREAMS ---------------


  // --------------- OTHER -------------------------------

  /** Unsubscribe observable for subscriptions. */
  unsubscribe$: Subject<void> = new Subject();

  constructor(
    private state: EditSurveyState,
    private route: ActivatedRoute,
    private selectors: EditSurveySelectors,
    private store: Store<fromStore.State>,
    private db: FirebaseService,
  ) {
  }

  ngOnInit() {
    // --------------- EVENT HANDLING ----------------------


    // --------------- LOAD DATA ---------------------------

    // Once everything is set up, load the data for the role.
    this.store.dispatch( new Cleanup({
      containerId: this.containerId,
    }) );
  }


  ngOnDestroy() {
    // Unsubscribe subscriptions.
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    // Unsubscribe from firebase connection from load and free up memoized selector values.
    this.store.dispatch( new Cleanup({
      containerId: this.containerId,
    }) );
    this.selectors.cleanup(this.containerId);
  }
}
