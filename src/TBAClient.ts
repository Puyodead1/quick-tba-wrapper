import c from "centra";
import { API_BASE, API_ENDPOINTS } from "./Constants";
import { StatusResponse } from "./Structures/StatusResponse";
import { Teams } from "./Teams";

/**
 * The main wrapper class
 */
export class TBAClient {
  /**
   * The TBA Auth key
   */
  private readonly authKey: string;
  /**
   * The useragent for requests
   */
  readonly userAgent: string;
  private readonly cache: Map<string, string>;
  /**
   * The teams API
   */
  public readonly teams: Teams;

  /**
   * Creates a TBA Client instance
   * @param authKey TBA API key
   * @param userAgent User agent to use for requests
   */
  constructor(authKey: string, userAgent?: string) {
    if (!authKey) throw new Error("No auth key provided!");
    this.authKey = authKey;
    this.userAgent =
      userAgent || `Node.JS/${process.version} (${process.platform})`;
    this.cache = new Map<string, string>();

    this.teams = new Teams(this);
  }

  /**
   * Internal method to fetch raw data from the API
   * @description **This is an internal method! You shouldn't use this!**
   * @param endpoint url endpoint to fetch
   * @internal
   * @returns usually json
   */
  get(endpoint: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const req = c(API_BASE + endpoint, "GET")
        .header("X-TBA-Auth-Key", this.authKey)
        .header("User-Agent", this.userAgent);

      // if the cache has a value for last-modified on the endpoint, add the header
      if (this.cache.has(endpoint)) {
        req.header("If-Modified-Since", this.cache.get(endpoint)!);
      }

      req
        .send()
        .then(async (req) => {
          if (req.statusCode !== 200) reject(await req.text());
          else {
            // cache the last modified header
            if (req.headers["last-modified"])
              this.cache.set(endpoint, req.headers["last-modified"]);

            resolve(await req.json());
          }
        })
        .catch((e) => reject(e));
    });
  }

  /**
   * Gets the platform status
   * @returns {@link StatusResponse}
   */
  getStatus(): Promise<StatusResponse> {
    return new Promise((resolve, reject) => {
      this.get(API_ENDPOINTS.STATUS)
        .then((data) => {
          resolve(new StatusResponse(data));
        })
        .catch((e) => reject(e));
    });
  }
}
