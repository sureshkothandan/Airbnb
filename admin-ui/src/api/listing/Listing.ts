import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type Listing = {
  createdAt: Date;
  description: string | null;
  id: string;
  listingCreatedBy?: Array<User>;
  locationData: JsonValue;
  locationType: string | null;
  mapData: JsonValue;
  photos: JsonValue;
  placeSpace: JsonValue;
  placeType: string | null;
  price: number | null;
  title: string;
  updatedAt: Date;
};
