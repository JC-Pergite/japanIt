import { Activity } from "./activity";

export class Event {
    name: string;
    content: string;
    imageUrl: string;
    youtube: string;
    activities: Activity[];

    constructor(name: string, content: string, imageUrl: string, 
                            youtube: string, activities: Activity[]) {
        this.name = name;
        this.content = content;
        this.imageUrl = imageUrl;
        this.youtube = youtube;
        this.activities = activities;
    }
}