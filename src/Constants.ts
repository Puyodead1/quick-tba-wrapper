export const API_BASE = "https://www.thebluealliance.com/api/v3";
export const API_ENDPOINTS = {
  STATUS: `/status`,
  TEAM: (key: string) => `/team/${key}`,
  TEAM_SIMPLE: (key: string) => `/team/${key}/simple`,
  TEAM_YEARS_PARTICIPATED: (key: string) => `/team/${key}/years_participated`,
  TEAM_DISTRICTS: (key: string) => `/team/${key}/districts`,
  TEAM_ROBOTS: (key: string) => `/team/${key}/robots`,
  TEAM_EVENTS: (key: string) => `/team/${key}/events`,
  TEAM_EVENTS_SIMPLE: (key: string) => `/team/${key}/events/simple`,
  TEAM_EVENTS_KEYS: (key: string) => `/team/${key}/events/keys`,
  TEAM_EVENTS_YEAR: (key: string, year: string) =>
    `/team/${key}/events/${year}`,
  TEAM_EVENTS_YEAR_SIMPLE: (key: string, year: string) =>
    `/team/${key}/events/${year}/simple`,
  TEAM_EVENTS_YEAR_KEYS: (key: string, year: string) =>
    `/team/${key}/events/${year}/keys`,
  TEAM_EVENTS_YEAR_STATUSES: (key: string, year: string) =>
    `/team/${key}/events/${year}/statuses`,
  TEAMS: (pageNum: number) => `/teams/${pageNum}`,
  TEAMS_SIMPLE: (pageNum: number) => `/teams/${pageNum}/simple`,
  TEAMS_KEYS: (pageNum: number) => `/teams/${pageNum}/keys`,
  TEAMS_YEAR: (pageNum: number, year: string) => `/teams/${year}/${pageNum}`,
  TEAMS_YEAR_SIMPLE: (pageNum: number, year: string) =>
    `/teams/${year}/${pageNum}/simple`,
  TEAMS_YEAR_KEYS: (pageNum: number, year: string) =>
    `/teams/${year}/${pageNum}/keys`,
};
