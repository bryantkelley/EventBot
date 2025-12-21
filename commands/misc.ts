export const ping = () => {
	return "pong!";
};

export const pong = () => {
	return "ping!";
};

export const stats = (count: number) => {
	return `Responded to ${count} queries since last started.`;
};
