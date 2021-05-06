import TBA from "..";
import { API_ENDPOINTS } from "../Constants";
import { APIDistrict } from "../Interfaces/District.interface";
import { APIEvent } from "../Interfaces/Event.interface";
import { APIRobot } from "../Interfaces/Robot.interface";
import { APITeamSimple } from "../Interfaces/Team.interface";
import District from "./District";
import Event from "./Event";
import Robot from "./Robot";

export default class TeamSimple {
  private client!: TBA;
  public key: string;
  public teamNumber: number;
  public nickname: string;
  public name: string;
  public city: string;
  public stateProv: string;
  public coutry: string;

  constructor(client: TBA, data: APITeamSimple) {
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
