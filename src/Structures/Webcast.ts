import { TBAClient } from "../TBAClient";
import { APIWebcast } from "../Interfaces/Event.interface";

/**
 * Represents a Webcast
 */
export class Webcast {
  private readonly client!: TBAClient;
  /**
   * The type of webcast
   * @example 'youtube' or 'twitch'
   */
  public readonly type: string;
  /**
   * The channel
   * @example FIRSTinMI03 (twitch channel)
   */
  public readonly channel: string;
  public readonly date?: string;
  public readonly file?: string;

  /**
   * Creates a new Webcast instance
   * @param client the TBA Client
   * @param data raw webcast object from the API
   */
  constructor(client: TBAClient, data: APIWebcast) {
    Object.defineProperty(this, "client", {
      enumerable: false,
      writable: false,
      value: client,
    });

    this.type = data.type;
    this.channel = data.channel;
    this.date = data.date;
    this.file = data.file;
  }
}
