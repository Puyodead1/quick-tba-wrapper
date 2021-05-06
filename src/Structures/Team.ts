import TBA from "../index";
import { APITeam } from "../Interfaces/Team.interface";
import TeamSimple from "./TeamSimple";

export default class Team extends TeamSimple {
  public schoolName: string;
  public address: string | null;
  public postalCode: string;
  public gmapsPlaceId: string | null;
  public gmapsUrl: string | null;
  public lat: number | null;
  public lng: number | null;
  public locationName: string | null;
  public website: string | null;
  public rookieYear: number;
  public motto: string | null;
  public homeChampionship: unknown | null;

  constructor(client: TBA, data: APITeam) {
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
