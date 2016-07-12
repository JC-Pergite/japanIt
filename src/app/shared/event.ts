import { Activity } from "./activity";

export class Event {
    id: number;
    name: string;
    content: string;
    imageUrl: string;
    youtube: string;
    activities: Activity[];

    constructor(id: number, name: string, content: string, imageUrl: string, 
                            youtube: string, activities: Activity[]) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.imageUrl = imageUrl;
        this.youtube = youtube;
        this.activities = activities;
    }
}