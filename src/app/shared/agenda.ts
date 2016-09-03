import { Activity } from './activity';

export class Agenda {
	constructor(public name: string, public activities: Activity[], public id: string) {}
}