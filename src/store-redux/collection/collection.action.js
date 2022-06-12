import { createAction } from '../../utils/reducer/reducer.utils';
import { COLLECTION_ACTION_TYPES } from './collection.type';
import { getProductsAndItems } from '../../utils/firebase/firebase.utils';

export const fetchCollactionStart = () => {
   return createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTION_START)
}

export const fetchCollactionSuccess = (categoriesArray) => {
   return createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTION_SUCCESS, categoriesArray)
}

export const fetchCollactionFaile = (error) => {
   return createAction(COLLECTION_ACTION_TYPES.FETCH_COLLECTION_FAILED, error)
}

export const fetchCollectionAsync = () => async (dispatch) => {
   
   dispatch(fetchCollactionStart());

   try {
      const categoriesArray = await getProductsAndItems()
      dispatch(fetchCollactionSuccess(categoriesArray));
   } catch(error) {
      dispatch(fetchCollactionFaile(error))
   }
}