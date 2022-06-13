import { createAction } from '../../utils/reducer/reducer.utils';
import { COLLECTION_ACTION_TYPES } from './collection.type';

export const fetchCollactionStart = () => {
   return createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTION_START)
}

export const fetchCollactionSuccess = (categoriesArray) => {
   return createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTION_SUCCESS, categoriesArray)
}

export const fetchCollactionFailed = (error) => {
   return createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTION_FAILED, error)
}