import TBA from "..";
import { APIEvent } from "../Interfaces/Event.interface";
import District from "./District";
import Webcast from "./Webcast";

export default class Event {
  private client!: TBA;
  public key: string;
  public name: string;
  public eventCode: string;
  public eventType: number;
  public district: District | null = null;
  public city: string;
  public stateProv: string;
  public country: string;
  public startDate: string;
  public endDate: string;
  public year: number;
  public shortName: string;
  public eventTypeString: string;
  public week: number;
  public address: string;
  public postalCode: string;
  public gmapsPlaceId: string;
  public gmapsUrl: string;
  public lat: number;
  public lng: number;
  public locationName: string;
  public timezone: string;
  public website: string;
  public firstEventId?: string;
  public firstEventCode: string;
  public webcasts: Webcast[] = [];
  public divisionKeys: string[];
  public parentEventKey?: string;
  public playoffType?: number;
  public playoffTypeString?: string;

  constructor(client: TBA, data: APIEvent) {
    Object.defineProperty(this, "client", {
      enumerable: false,
      writable: false,
      value: client,
    });

    this.key = data.key;
    this.name = data.name;
    this.eventCode = data.event_code;
    this.eventType = data.event_type;
    if (data.district) {
      this.district = new District(client, data.district);
    }
    this.city = data.city;
    this.stateProv = data.state_prov;
    this.country = data.country;
    this.startDate = data.start_date;
    this.endDate = data.end_date;
    this.year = data.year;
    this.shortName = data.short_name;
    this.eventTypeString = data.event_type_string;
    this.week = data.week;
    this.address = data.address;
    this.postalCode = data.postal_code;
    this.gmapsPlaceId = data.gmaps_place_id;
    this.gmapsUrl = data.gmaps_url;
    this.lat = data.lat;
    this.lng = data.lng;
    this.locationName = data.location_name;
    this.timezone = data.timezone;
    this.website = data.website;
    this.firstEventId = data.first_event_id;
    this.firstEventCode = data.first_event_code;
    for (const webcast of data.webcasts) {
      this.webcasts.push(new Webcast(client, webcast));
    }
    this.divisionKeys = data.division_keys;
    this.parentEventKey = data.parent_event_key;
    this.playoffType = data.playoff_type;
    this.playoffTypeString = data.playoff_type_string;
  }
}
