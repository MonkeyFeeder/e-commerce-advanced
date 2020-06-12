import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

// Created when switching from array to object collections
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  // Once we removed the shop data file and set the initial shop state to null, this part couldn't work with a collections set to null ( because of it being null and JS not 
  // looping over null entities ), so we have to check whether the initial state is empty or not 
  // Before -> collections => Object.keys(collections).map(key => collections[key])
  // TO 
  collections => collections ? Object.keys(collections).map(key => collections[key]) : [] 
)

export const selectCollection = collectionUrlParam => 
  createSelector(
    [selectCollections],
    collections => 
      collections[collectionUrlParam]
  )