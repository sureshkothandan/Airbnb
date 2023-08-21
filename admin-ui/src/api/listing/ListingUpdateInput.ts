import { UserUpdateManyWithoutListingsInput } from "./UserUpdateManyWithoutListingsInput";
import { InputJsonValue } from "../../types";

export type ListingUpdateInput = {
  description?: string | null;
  listingCreatedBy?: UserUpdateManyWithoutListingsInput;
  locationData?: InputJsonValue;
  locationType?: string | null;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string | null;
  price?: number | null;
  title?: string;
};
