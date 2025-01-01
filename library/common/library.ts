export enum LocationState {
  ACTIVE = "ACTIVE_LOCATION",
  DEFUNCT = "DEFUNCT_LOCATION",
}

export interface Location {
  title: string;
  postal_address: string;
}
