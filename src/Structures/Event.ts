import { TBAClient } from "../TBAClient";
import { APIEvent } from "../Interfaces/Event.interface";
import { District } from "./District";
import { Webcast } from "./Webcast";
import { EventSimple } from "./EventSimple";

/**
 * Represents an Event
 */
export class Event extends EventSimple {
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
    super(client, data);

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
