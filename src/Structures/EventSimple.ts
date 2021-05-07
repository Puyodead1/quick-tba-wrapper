import { TBAClient } from "../TBAClient";
import { APIEventSimple } from "../Interfaces/Event.interface";
import { District } from "./District";

/**
 * Represents an Event
 */
export class EventSimple {
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

  /**
   * Creates an Event instance
   * @param client The TBA Client
   * @param data raw event data from the API
   */
  constructor(client: TBAClient, data: APIEventSimple) {
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
  }
}
