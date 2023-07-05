import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { AppDataSource } from "./data-source"
import { Personal } from "./entity/Personal"


export const first = (async ({ event, resolve }) => {
    console.log("this always runs")

    try {
        await AppDataSource.initialize();
        // here you can start to work with your database
    } catch (error) {
        console.log(error);
    }

    const personal = await AppDataSource.manager.find(Personal)
    console.log("Loaded users: ", personal)

    


    const response = await resolve(event);

    await AppDataSource.destroy();

    return response;
    
}) satisfies Handle;

export const handle = sequence(first);
