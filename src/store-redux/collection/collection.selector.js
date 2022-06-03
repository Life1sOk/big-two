export const selectorCollectionMap = (state) => 
    state.collection.collections.reduce((acc, collection) => {
        const { title, items } = collection;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});