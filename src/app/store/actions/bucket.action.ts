import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";

export const addToBucket = createAction(
    '[Buket] Add',
    props<{ payload: Bucket }>()
)

export const removeFromBucket = createAction(
    '[Buket] Remove',
    props<{ payload: Partial<Bucket> }>()
)