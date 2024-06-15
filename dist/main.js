"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const eventsRouter = express_1.default.Router();
eventsRouter
    .route("/events")
    .get();
eventsRouter
    .route("/events/:id")
    .get();
eventsRouter
    .route("/events")
    .post();
eventsRouter
    .route("/events/:id")
    .patch();
eventsRouter
    .route("/events/:id")
    .delete();
app.use(eventsRouter);
app.use(express_1.default.json());
app.listen(3000, () => {
    console.log("Server running in port 3000");
});
