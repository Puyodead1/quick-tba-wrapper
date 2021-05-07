import { APIEventStatus } from "../Interfaces/Event.interface";
import { TBAClient } from "../TBAClient";

export class EventStatus {
  private readonly client!: TBAClient;

  constructor(client: TBAClient, data: APIEventStatus) {
    Object.defineProperty(this, "client", {
      enumerable: false,
      writable: false,
      value: client,
    });

    // TODO: data
  }
}
