import { createSelector } from 'reselect';

const shopCollection = state => state.shop;

export const selectShopCollections = createSelector(
    [shopCollection],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );
  
  export const selectCollection = collectionUrlParam =>
    createSelector(
      [selectShopCollections],
      collections => collections[collectionUrlParam]
    );