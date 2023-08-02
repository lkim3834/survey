import { Action } from '@ngrx/store';

export enum EditSurveyActionTypes {
  LOAD_DATA = '[EditSurvey] load data',
  CLEANUP = '[EditSurvey] cleanup',
}

/** Action for loading required DB data. */
export class LoadData implements Action {
  readonly type = EditSurveyActionTypes.LOAD_DATA;

  constructor(public payload: {
    containerId: string,
  }, public correlationId: string) { }
}

/** Action for cleaning up loading subscriptions. */
export class Cleanup implements Action {
  readonly type = EditSurveyActionTypes.CLEANUP;
  constructor(public payload: {
    containerId: string,
  }) { }
}

export type EditSurveyActions =
  LoadData |
  Cleanup;
