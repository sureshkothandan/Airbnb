import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ListingWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  listingCreatedBy?: UserListRelationFilter;
  locationData?: JsonFilter;
  locationType?: StringNullableFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringNullableFilter;
  price?: IntNullableFilter;
  title?: StringFilter;
  trips?: TripListRelationFilter;
  wishlists?: WishlistListRelationFilter;
};
