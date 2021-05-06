import { TBAClient } from "../TBAClient";
import { APIRobot } from "../Interfaces/Robot.interface";

/**
 * Represents a Robot
 */
export class Robot {
  private readonly client!: TBAClient;
  /**
   * The Robot key
   * @example frc2020_121
   */
  public readonly key: string;
  /**
   * The Robots name
   */
  public readonly robotName: string;
  /**
   * The Team key that the Robot belongs to
   */
  public readonly teamKey: string;
  /**
   * The Robots competition year
   */
  public readonly year: number;

  /**
   * Creates a new Robot instance
   * @param client The TBA Client
   * @param data raw robot object from the API
   */
  constructor(client: TBAClient, data: APIRobot) {
    Object.defineProperty(this, "client", {
      enumerable: false,
      writable: false,
      value: client,
    });

    this.key = data.key;
    this.robotName = data.robot_name;
    this.teamKey = data.team_key;
    this.year = data.year;
  }
}
