export interface APIStatusResponseApp {
  minAppVersion: number;
  latestAppVersion: number;
}

export interface APIStatusResponseWeb {
  commitTime: string;
  currentCommit: string;
  deployTime: string;
  endpointsSha?: string;
  tbaClientEndpointsSha?: string;
  travisJob: string;
}

export interface APIStatusResponseInterface {
  current_season: number;
  max_season: number;
  is_datafeed_down: boolean;
  down_events: string[];
  ios: {
    min_app_version: number;
    latest_app_version: number;
  };
  android: {
    min_app_version: number;
    latest_app_version: number;
  };
  web: {
    commit_time: string;
    current_commit: string;
    deploy_time: string;
    endpoints_sha: string;
    tbaClient_endpoints_sha: string;
    travis_job: string;
  };
}
