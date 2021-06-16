import { createAction, props } from "@ngrx/store";


export const outingCreated = createAction(
  '[outings] outing created',
  props<{ payload: Outing }>()
)

interface Outing {
  parkId: string,
  when: string,
  who: string,
  notes: string,
  numberOfPeople?: number;
}
