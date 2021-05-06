import { TBAClient } from "../TBAClient";
import { APIEvent } from "../Interfaces/Event.interface";
import { District } from "./District";
import { Webcast } from "./Webcast";

/**
 * Represents an Event
 */
export class Event {
  private readonly client!: TBAClient;
  public readonly key: string;
  public readonly name: string;
  public readonly eventCode: string;
  public readonly eventType: number;
  public readonly district: District | null = null;
  public readonly city: string;
  public readonly stateProv: string;
  public readonly country: string;
  public readonly startDate: string;
  public readonly endDate: string;
  public readonly year: number;
  public readonly shortName: string;
  public readonly eventTypeString: string;
  public readonly week: number;
  public readonly address: string;
  public readonly postalCode: string;
  public readonly gmapsPlaceId: string;
  public readonly gmapsUrl: string;
  public readonly lat: number;
  public readonly lng: number;
  public readonly locationName: string;
  public readonly timezone: string;
  public readonly website: string;
  public readonly firstEventId?: string;
  public readonly firstEventCode: string;
  public readonly webcasts: Webcast[] = [];
  public readonly divisionKeys: string[];
  public readonly parentEventKey?: string;
  public readonly playoffType?: number;
  public readonly playoffTypeString?: string;

  /**
   * Creates an Event instance
   * @param client The TBA Client
   * @param data raw event data from the API
   */
  constructor(client: TBAClient, data: APIEvent) {
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
