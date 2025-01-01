export type LocationState = "ACTIVE_LOCATION" | "DEFUNCT_LOCATION";

export const LocationStates = {
  ACTIVE: "ACTIVE_LOCATION" as LocationState,
  DEFUNCT: "DEFUNCT_LOCATION" as LocationState,
} as const;

export interface Location {
  title: string;
  postal_address: string;

  state: LocationState;
}
