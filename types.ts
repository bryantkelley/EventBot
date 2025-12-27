type UUID = `${string}-${string}-${string}-${string}-${string}`;
export type HashChannel = `#${string}`;

type User = {
	prefix: Uint8Array<ArrayBuffer>;
	name?: string;
};

type RSVP = {
	eventId: UUID;
	attending?: boolean; // optional so undefined is maybe
	attendeePrefix: User;
};

export type CalendarEvent = {
	id: UUID;
	title: string; // Alice's Birthday Party
	location: string; // 123 Fake St
	details: string; // Enter 123# at the callbox and I'll buzz you in
	organizers: User[];
	startTime?: Date;
	endTime?: Date;
	allDay?: boolean;
	rsvps?: RSVP[];
	channel?: HashChannel;
	seriesId?: UUID;
};

//
type ChannelPerms = {
	channel: HashChannel;
	authorizedUsers: User[];
};
