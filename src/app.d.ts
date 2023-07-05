// See https://kit.svelte.dev/docs/types#app
import { DataSource } from "typeorm"

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			db:DataSource
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
