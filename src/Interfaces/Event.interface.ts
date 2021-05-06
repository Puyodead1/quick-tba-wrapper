import { APIDistrict } from "./District.interface";

export type WebcastType = "youtube" | "twitch";

export interface APIWebcast {
  type: string;
  channel: string;
  date?: string;
  file?: string;
}

export interface APIEvent {
  key: string;
  name: string;
  event_code: string;
  event_type: number;
  district: APIDistrict;
  city: string;
  state_prov: string;
  country: string;
  start_date: string;
  end_date: string;
  year: number;
  short_name: string;
  event_type_string: string;
  week: number;
  address: string;
  postal_code: string;
  gmaps_place_id: string;
  gmaps_url: string;
  lat: number;
  lng: number;
  location_name: string;
  timezone: string;
  website: string;
  first_event_id?: string;
  first_event_code: string;
  webcasts: APIWebcast[];
  division_keys: string[];
  parent_event_key?: string;
  playoff_type?: number;
  playoff_type_string?: string;
}
