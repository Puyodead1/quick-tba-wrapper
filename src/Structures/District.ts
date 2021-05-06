import TBA from "..";
import { APIDistrict } from "../Interfaces/District.interface";

export default class District {
  private client!: TBA;
  public key: string;
  public abbreviation: string;
  public displayName: string;
  public year: number;

  constructor(client: TBA, data: APIDistrict) {
    Object.defineProperty(this, "client", {
      enumerable: false,
      writable: false,
      value: client,
    });

    this.key = data.key;
    this.abbreviation = data.abbreviation;
    this.displayName = data.display_name;
    this.year = data.year;
  }
}
