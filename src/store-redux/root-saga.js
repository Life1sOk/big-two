import { all, call } from 'redux-saga/effects';

import { collectionSaga } from './collection/collection.saga';
import { userSaga } from './user/user.saga';

export function* rootSaga() {
    yield all([call(collectionSaga), call(userSaga)])
}