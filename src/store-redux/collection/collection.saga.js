import { all, call, takeLatest, put } from 'redux-saga/effects';

import { getProductsAndItems } from '../../utils/firebase/firebase.utils';

import { fetchCollactionSuccess, fetchCollactionFailed } from './collection.action'; 

import { COLLECTION_ACTION_TYPES } from './collection.type';


export function* fetchCollectionAsync() {
    try {
        const categoriesArray = yield call(getProductsAndItems)
        yield put(fetchCollactionSuccess(categoriesArray));
     } catch(error) {
        yield put(fetchCollactionFailed(error))
     }
}

export function* onFetchCollection() {
    yield takeLatest(COLLECTION_ACTION_TYPES.FETCH_COLLECTION_START, fetchCollectionAsync)
}

export function* collectionSaga() {
    yield all([call(onFetchCollection)])
}