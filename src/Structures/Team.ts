import { TBAClient } from "../TBAClient";
import { APITeam } from "../Interfaces/Team.interface";
import { TeamSimple } from "./TeamSimple";

/**
 * Represents a Team
 */
export class Team extends TeamSimple {
  /**
   * The Teams school name
   */
  public readonly schoolName: string;
  /**
   * The Teams address
   */
  public readonly address: string | null;
  /**
   * The Teams Zip Code
   */
  public readonly postalCode: string;
  /**
   * The Teams Google Maps Place ID
   */
  public readonly gmapsPlaceId: string | null;
  /**
   * The Teams Google Maps URL
   */
  public readonly gmapsUrl: string | null;
  public readonly lat: number | null;
  public readonly lng: number | null;
  /**
   * The Teams location name
   */
  public readonly locationName: string | null;
  /**
   * The Teams website
   */
  public readonly website: string | null;
  /**
   * The Teams rookie year
   */
  public readonly rookieYear: number;
  /**
   * The Teams motto
   */
  public readonly motto: string | null;
  /**
   * The Teams home championship
   */
  public readonly homeChampionship: unknown | null;

  /**
   * Creates a Team instance
   * @param client The TBA Client
   * @param data raw team object from the API
   */
  constructor(client: TBAClient, data: APITeam) {
    super(client, data);

    this.schoolName = data.school_name;
    this.address = data.address;
    this.postalCode = data.postal_code;
    this.gmapsPlaceId = data.gmaps_place_id;
    this.gmapsUrl = data.gmaps_url;
    this.lat = data.lat;
    this.lng = data.lng;
    this.locationName = data.location_name;
    this.website = data.website;
    this.rookieYear = data.rookie_year;
    this.motto = data.motto;
    this.homeChampionship = data.home_championship;
  }
}
