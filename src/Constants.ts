export const API_BASE = "https://www.thebluealliance.com/api/v3";
export const API_ENDPOINTS = {
  STATUS: `/status`,
  TEAM: (key: string) => `/team/${key}`,
  TEAM_SIMPLE: (key: string) => `/team/${key}/simple`,
  TEAM_YEARS_PARTICIPATED: (key: string) => `/team/${key}/years_participated`,
  TEAM_DISTRICTS: (key: string) => `/team/${key}/districts`,
  TEAM_ROBOTS: (key: string) => `/team/${key}/robots`,
  TEAM_EVENTS: (key: string) => `/team/${key}/events`,
  TEAMS: (pageNum: number) => `/teams/${pageNum}`,
  TEAMS_SIMPLE: (pageNum: number) => `/teams/${pageNum}/simple`,
  TEAMS_KEYS: (pageNum: number) => `/teams/${pageNum}/keys`,
  TEAMS_YEAR: (year: string, pageNum: number) => `/teams/${year}/${pageNum}`,
  TEAMS_YEAR_SIMPLE: (year: string, pageNum: number) =>
    `/teams/${year}/${pageNum}/simple`,
  TEAMS_YEAR_KEYS: (year: string, pageNum: number) =>
    `/teams/${year}/${pageNum}/keys`,
};
