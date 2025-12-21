// Authorized Contact Commands

const addPublicEvent = (message: string) => {
	// Adds an event and returns the eventPrefix
};

// Todo: figure out an event shortcode
// use a uuid and call it prefix?
const updateEvent = (eventPrefix: string) => {
	// provide new details for an event
};

const removeEvent = (eventPrefix: string, deletionType: "occurrence" | "series" = "occurrence") => {
	// deletes an event or series of events
	// default to single occurrence
	// let the user know that a single or series was deleted
};

// Un-auth'd Contact Commands
const getEventPrefix


// Channel Commands

const listEvents = (count?: number = 5) => {
	// Get next events
	// default to next 5 events
	// only show unique events and not every occurrence
};

const nextEvent = () => {
	// Return the next event
};

