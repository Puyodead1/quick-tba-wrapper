import {
  APIStatusResponseApp,
  APIStatusResponseInterface,
  APIStatusResponseWeb,
} from "../Interfaces/StatusResponse.interface";

/**
 * Represents a Status Response
 */
export class StatusResponse {
  /**
   * The current season
   */
  public readonly currentSeason: number;
  public readonly maxSeason: number;
  public readonly isDataFeedDown: boolean;
  public readonly downEvents: string[];
  /**
   * iOS app information
   */
  public readonly ios: APIStatusResponseApp;
  /**
   * Android app information
   */
  public readonly android: APIStatusResponseApp;
  /**
   * Website information
   */
  public readonly web: APIStatusResponseWeb;

  /**
   * Creates a status response instance
   * @param data raw status response data from the API
   */
  constructor(data: APIStatusResponseInterface) {
    this.currentSeason = data.current_season;
    this.maxSeason = data.max_season;
    this.isDataFeedDown = data.is_datafeed_down;
    this.downEvents = data.down_events;
    this.ios = {
      minAppVersion: data.ios.min_app_version,
      latestAppVersion: data.ios.latest_app_version,
    };
    this.android = {
      minAppVersion: data.android.min_app_version,
      latestAppVersion: data.android.latest_app_version,
    };
    this.web = {
      commitTime: data.web.commit_time,
      currentCommit: data.web.current_commit,
      deployTime: data.web.deploy_time,
      endpointsSha:
        data.web.endpoints_sha === "" ? undefined : data.web.endpoints_sha,
      tbaClientEndpointsSha:
        data.web.tbaClient_endpoints_sha === ""
          ? undefined
          : data.web.tbaClient_endpoints_sha,
      travisJob: data.web.travis_job,
    };
  }
}
