import { Event } from "../core/entity/Event";
import { IEventsRepository } from "../core/repository/event.repository.interface";

export class GetAllEventsUseCase {
  private repository: IEventsRepository;

  constructor(repository: IEventsRepository) {
    this.repository = repository;
  }

  async execute(): Promise<Event[] | []> {
    const events = await this.repository.findAll();
    return events;
  }
}
