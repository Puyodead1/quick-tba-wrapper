import { TBAClient } from "../TBAClient";
import { APIDistrict } from "../Interfaces/District.interface";

/**
 * Represents a District
 */
export class District {
  private readonly client!: TBAClient;
  public readonly key: string;
  public readonly abbreviation: string;
  public readonly displayName: string;
  public readonly year: number;

  /**
   * Creates a District instance
   * @param client The TBA Client
   * @param data raw district data from the API
   */
  constructor(client: TBAClient, data: APIDistrict) {
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
