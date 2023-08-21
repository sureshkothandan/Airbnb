import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ListingWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  listingCreatedBy?: StringNullableFilter;
  locationData?: JsonFilter;
  locationType?: StringNullableFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringNullableFilter;
  price?: IntNullableFilter;
  title?: StringFilter;
};
