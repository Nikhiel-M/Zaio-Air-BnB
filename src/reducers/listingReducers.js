import {
  LISTING_LIST_REQUEST,
  LISTING_LIST_SUCCESS,
  LISTING_LIST_FAIL,
} from "../types/listingTypes";

export const listingListRedeucer = (state = { listings: [] }, action) => {
  switch (action.type) {
    case LISTING_LIST_REQUEST:
      return { loading: true, listing: [] };

    case LISTING_LIST_SUCCESS:
      return { loading: false, listings: action.payload };

    case LISTING_LIST_FAIL:
      return { loading: true, error: action.payload };

    default:
      return state;
  }
};
