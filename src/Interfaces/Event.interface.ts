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

export interface APIEventSimple {
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
}

export interface APIEventStatusRankingRecord {
  losses: number;
  wins: number;
  ties: number;
}

export interface APIEventStatusRanking {
  matches_played: number;
  qual_average: number;
  sort_orders: number[];
  record: APIEventStatusRankingRecord;
  rank: number;
  dq: number;
  team_key: string;
}

export interface APIEventStatusAlliance {
  name: string;
  number: number;
  backup: {
    out: string;
    in: string;
  };
  pick: number;
}

export interface APIEventStatusQualifications {
  num_teams: number;
  ranking: APIEventStatusRanking;
  sort_order_info: {
    precision: number;
    name: string;
  }[];
  status: string;
}

export interface APIEventStatusPlayoffs {
  level: unknown;
  current_level_record: APIEventStatusRankingRecord;
  record: APIEventStatusRankingRecord;
  status: string;
  playoff_average: number;
}

export interface APIEventStatus {
  additionalProp1: {
    qual: APIEventStatusQualifications;
    alliance: APIEventStatusAlliance;
    playoff: APIEventStatusPlayoffs;
    alliance_status_str: string;
    playoff_status_str: string;
    overall_status_str: string;
    next_match_key: string;
    last_match_key: string;
  };
  additionalProp2: {
    qual: APIEventStatusQualifications;
    alliance: APIEventStatusAlliance;
    playoff: APIEventStatusPlayoffs;
    alliance_status_str: string;
    playoff_status_str: string;
    overall_status_str: string;
    next_match_key: string;
    last_match_key: string;
  };
  additionalProp3: {
    qual: APIEventStatusQualifications;
    alliance: APIEventStatusAlliance;
    playoff: APIEventStatusPlayoffs;
    alliance_status_str: string;
    playoff_status_str: string;
    overall_status_str: string;
    next_match_key: string;
    last_match_key: string;
  };
}
