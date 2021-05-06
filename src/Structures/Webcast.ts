import TBA from "..";
import { APIWebcast } from "../Interfaces/Event.interface";

export default class Webcast {
  private client!: TBA;
  public type: string;
  public channel: string;
  public date?: string;
  public file?: string;

  constructor(client: TBA, data: APIWebcast) {
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
