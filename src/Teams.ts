import { TBAClient } from "./TBAClient";
import { API_ENDPOINTS } from "./Constants";
import { APITeam, APITeamSimple } from "./Interfaces/Team.interface";
import { Team } from "./Structures/Team";
import { TeamSimple } from "./Structures/TeamSimple";

/**
 * Represents the Teams API, this is the main class used to interact with a team
 */
export class Teams {
  private readonly client!: TBAClient;

  /**
   * Creates a new Teams instance
   * @param client The TBA Client
   */
  constructor(client: TBAClient) {
    Object.defineProperty(this, "client", {
      enumerable: false,
      writable: false,
      value: client,
    });
  }

  /**
   * Gets a list of teams
   * @param page Page number of results to return, zero-indexed
   * @returns array of teams
   */
  getTeams(page: number = 0): Promise<Team[]> {
    return new Promise((resolve, reject) => {
      this.client
        .get(API_ENDPOINTS.TEAMS(page))
        .then((data: APITeam[]) => {
          const teams = [];
          for (const team of data) {
            teams.push(new Team(this.client, team));
          }

          resolve(teams);
        })
        .catch((e: Error) => reject(e));
    });
  }

  /**
   * Gets a list of short form teams (simple teams)
   * @param page Page number of results to return, zero-indexed
   * @returns array of simple teams
   */
  getTeamsSimple(page: number = 0): Promise<TeamSimple[]> {
    return new Promise((resolve, reject) => {
      this.client
        .get(API_ENDPOINTS.TEAMS_SIMPLE(page))
        .then((data: APITeamSimple[]) => {
          const teams = [];
          for (const team of data) {
            teams.push(new TeamSimple(this.client, team));
          }

          resolve(teams);
        })
        .catch((e: Error) => reject(e));
    });
  }

  /**
   * Gets a list team keys
   * @description each page will not have 500 teams, but will include the teams within that range of 500.
   * @param page Page number of results to return, zero-indexed
   * @returns array of team keys
   */
  getTeamKeys(page: number = 0): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.client
        .get(API_ENDPOINTS.TEAMS_KEYS(page))
        .then((data: string[]) => {
          resolve(data);
        })
        .catch((e: Error) => reject(e));
    });
  }

  /**
   * Gets a list of teams that competed in the given year
   * @param year Competition Year (or Season). Must be 4 digits. Defaults to current year
   * @param page Page number of results to return, zero-indexed
   * @returns array of teams
   */
  getTeamsByYear(
    year: string = new Date().getFullYear().toString(),
    page: number = 0
  ): Promise<Team[]> {
    return new Promise((resolve, reject) => {
      this.client
        .get(API_ENDPOINTS.TEAMS_YEAR(year, page))
        .then((data: APITeam[]) => {
          const teams = [];
          for (const team of data) {
            teams.push(new Team(this.client, team));
          }

          resolve(teams);
        })
        .catch((e: Error) => reject(e));
    });
  }

  /**
   * Gets a list of short form teams (simple teams) that competed in the given year
   * @param year Competition Year (or Season). Must be 4 digits. Defaults to current year
   * @param page Page number of results to return, zero-indexed
   * @returns array of simple teams
   */
  getTeamsByYearSimple(
    year: string = new Date().getFullYear().toString(),
    page: number = 0
  ): Promise<TeamSimple[]> {
    return new Promise((resolve, reject) => {
      this.client
        .get(API_ENDPOINTS.TEAMS_YEAR_SIMPLE(year, page))
        .then((data: APITeamSimple[]) => {
          const teams = [];
          for (const team of data) {
            teams.push(new TeamSimple(this.client, team));
          }

          resolve(teams);
        })
        .catch((e: Error) => reject(e));
    });
  }

  /**
   * Gets a list of Team Keys that competed in the given year
   * @description each page will not have 500 teams, but will include the teams within that range of 500.
   * @param year Competition Year (or Season). Must be 4 digits. Defaults to current year
   * @param page Page number of results to return, zero-indexed
   * @returns array of team keys
   */
  getTeamKeysByYear(
    year: string = new Date().getFullYear().toString(),
    page: number = 0
  ): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.client
        .get(API_ENDPOINTS.TEAMS_YEAR_KEYS(year, page))
        .then((data: string[]) => {
          resolve(data);
        })
        .catch((e: Error) => reject(e));
    });
  }

  /**
   * Gets a team by key
   * @param key team key, ex: frc121
   * @returns a team
   */
  getTeam(key: string): Promise<Team> {
    return new Promise((resolve, reject) => {
      this.client
        .get(API_ENDPOINTS.TEAM(key))
        .then((data: APITeam) => {
          resolve(new Team(this.client, data));
        })
        .catch((e: Error) => reject(e));
    });
  }

  /**
   * Gets a short form team (simple team) object by key
   * @param key team key, ex: frc121
   * @returns a simple team
   */
  getTeamSimple(key: string): Promise<TeamSimple> {
    return new Promise((resolve, reject) => {
      this.client
        .get(API_ENDPOINTS.TEAM_SIMPLE(key))
        .then((data: APITeamSimple) => {
          resolve(new TeamSimple(this.client, data));
        })
        .catch((e: Error) => reject(e));
    });
  }
}
