import TBA from "..";
import { APIRobot } from "../Interfaces/Robot.interface";

export default class Robot {
  private client!: TBA;
  public key: string;
  public robotName: string;
  public team_key: string;
  public year: number;

  constructor(client: TBA, data: APIRobot) {
    Object.defineProperty(this, "client", {
      enumerable: false,
      writable: false,
      value: client,
    });

    this.key = data.key;
    this.robotName = data.robot_name;
    this.team_key = data.team_key;
    this.year = data.year;
  }
}
