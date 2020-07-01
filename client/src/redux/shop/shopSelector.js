import { createSelector } from 'reselect';

const shopSelector = (state) => state.shop;

export const collectionSelector = createSelector(
  shopSelector,
  (shop) => shop.collections,
);

export const loadingSelector = createSelector(
  shopSelector,
  (shop) => shop.loading,
);

export const collectionLoadedSelector = createSelector(
  shopSelector,
  (shop) => !!shop.collections,
);

export const selectCollectionOverview = createSelector(
  collectionSelector,
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : [],
);

export const selectCollection = (collectionUrl) =>
  createSelector(collectionSelector, (collections) =>
    collections ? collections[collectionUrl] : null,
  );
