import { randomUUID } from "node:crypto";

export class Event  {
  private id: string;
  private name: string;
  private date: string;
  private talks: string[];
  private dist: string[];
  private local: string;

  constructor(
    name: string,
    date: string,
    talks: string[],
    dist: string[],
    local: string
  ) {
    this.id = randomUUID();
    this.name = name;
    this.date = date;
    this.talks = talks;
    this.dist = dist;
    this.local = local;
  }

  public getEventId() {
    return this.id;
  }

  public create() {}
}
