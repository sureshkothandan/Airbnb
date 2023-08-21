import { UserCreateNestedManyWithoutListingsInput } from "./UserCreateNestedManyWithoutListingsInput";
import { InputJsonValue } from "../../types";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  description?: string | null;
  listingCreatedBy?: UserCreateNestedManyWithoutListingsInput;
  locationData?: InputJsonValue;
  locationType?: string | null;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string | null;
  price?: number | null;
  title: string;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};
