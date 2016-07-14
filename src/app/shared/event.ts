import { Activity } from "./activity";

export class Event {
    constructor(public name: string, public content: string, public imageUrl: string, 
                           public youtube: string, public activities: Activity[]) {}
}