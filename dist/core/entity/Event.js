"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const node_crypto_1 = require("node:crypto");
class Event {
    constructor(name, date, talks, dist, local) {
        this.id = (0, node_crypto_1.randomUUID)();
        this.name = name;
        this.date = date;
        this.talks = talks;
        this.dist = dist;
        this.local = local;
    }
    getEventId() {
        return this.id;
    }
    create() { }
}
exports.Event = Event;
