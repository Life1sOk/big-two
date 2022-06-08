import { createSelector } from '@reduxjs/toolkit';

const selectCollectionReducer = (state) => state.collection;

export const selectCollections = createSelector(
    [selectCollectionReducer],
    (collectionsSlice) => collectionsSlice.collections
);

export const selectorCollectionMap = createSelector(
    [selectCollections],
    (collections) => collections.reduce((acc, collection) => {
        const { title, items } = collection;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);