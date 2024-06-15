import { Event } from "../entity/Event";

export interface IEventsRepository{
    create(event: Event):Promise<void>;
    getById(eventId: string):Promise<Event|undefined>;
    findAll():Promise<Event[]>;
    update(event:Event):Promise<void>;
    delete(eventId: string): Promise<void>;

}