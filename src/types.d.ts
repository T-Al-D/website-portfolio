// src/custom.d.ts or src/types.d.ts
/** apparently nessecary for the image path ? */
declare module "*.png" {
	const value: string;
	export default value;
}

declare module "*.PNG" {
	const value: string;
	export default value;
}

declare module "*.jpg" {
	const value: string;
	export default value;
}

declare module "*.jpeg" {
	const value: string;
	export default value;
}

declare module "*.svg" {
	const value: string;
	export default value;
}