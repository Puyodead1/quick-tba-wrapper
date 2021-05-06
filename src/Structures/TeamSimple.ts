import { TBAClient } from "../TBAClient";
import { API_ENDPOINTS } from "../Constants";
import { APIDistrict } from "../Interfaces/District.interface";
import { APIEvent } from "../Interfaces/Event.interface";
import { APIRobot } from "../Interfaces/Robot.interface";
import { APITeamSimple } from "../Interfaces/Team.interface";
import { District } from "./District";
import { Event } from "./Event";
import { Robot } from "./Robot";

/**
 * Represents a Simple Team
 */
export class TeamSimple {
  private readonly client!: TBAClient;
  /**
   * The Team key
   * @example frc121
   */
  public readonly key: string;
  /**
   * The Team number
   * @example 121
   */
  public readonly teamNumber: number;
  /**
   * The Teams nickname
   */
  public readonly nickname: string;
  /**
   * The Teams name
   */
  public readonly name: string;
  /**
   * The Teams city
   */
  public readonly city: string;
  /**
   * The Teams state/provence
   */
  public readonly stateProv: string;
  /**
   * The Teams country
   */
  public readonly coutry: string;

  /**
   * Creates a Simple Team instance
   * @param client The TBA Client
   * @param data raw simple team data from the API
   */
  constructor(client: TBAClient, data: APITeamSimple) {
    Object.defineProperty(this, "client", {
      enumerable: false,
      value: client,
      writable: false,
    });

    this.key = data.key;
    this.teamNumber = data.team_number;
    this.nickname = data.nickname;
    this.name = data.name;
    this.city = data.city;
    this.stateProv = data.state_prov;
    this.coutry = data.country;
  }

  /**
   * Gets a list of years in which the team participated in at least one competition.
   * @returns array of years participated
   */
  getYearsParticipated(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.client
        .get(API_ENDPOINTS.TEAM_YEARS_PARTICIPATED(this.key))
        .then((data: string[]) => {
          resolve(data);
        })
        .catch((e) => reject(e));
    });
  }

  /**
   * Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
   * @returns array of Districts
   */
  getDistricts(): Promise<District[]> {
    return new Promise((resolve, reject) => {
      this.client
        .get(API_ENDPOINTS.TEAM_DISTRICTS(this.key))
        .then((data: APIDistrict[]) => {
          const districts = [];
          for (const district of data) {
            districts.push(new District(this.client, district));
          }
          resolve(districts);
        })
        .catch((e) => reject(e));
    });
  }

  /**
   * Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
   * @returns array of Robots
   */
  getRobots(): Promise<Robot[]> {
    return new Promise((resolve, reject) => {
      this.client
        .get(API_ENDPOINTS.TEAM_ROBOTS(this.key))
        .then((data: APIRobot[]) => {
          const robots = [];
          for (const robot of data) {
            robots.push(new Robot(this.client, robot));
          }
          resolve(robots);
        })
        .catch((e) => reject(e));
    });
  }

  /**
   * Gets a list of all events this team has competed at.
   * @returns array of Robots
   */
  getEvents(): Promise<Event[]> {
    return new Promise((resolve, reject) => {
      this.client
        .get(API_ENDPOINTS.TEAM_EVENTS(this.key))
        .then((data: APIEvent[]) => {
          const events = [];
          for (const event of data) {
            events.push(new Event(this.client, event));
          }
          resolve(events);
        })
        .catch((e) => reject(e));
    });
  }
}
