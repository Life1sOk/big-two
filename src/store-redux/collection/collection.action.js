import { createAction } from '../../utils/reducer/reducer.utils';
import { COLLECTION_ACTION_TYPES } from './collection.type';

export const setCollection = (categoriesArray) => {
   return createAction(COLLECTION_ACTION_TYPES.GET_COLLECTION, categoriesArray)
}