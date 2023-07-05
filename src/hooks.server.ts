import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"


export const first = (async ({ event, resolve }) => {
    console.log("this always runs")

    AppDataSource.initialize().then(async () => {
        const user= new User()
        console.log("Inserting a new user into the database...")
        user.email = "Timber"
        user.id = 25
        await AppDataSource.manager.save(user)
        console.log("Saved a new user with id: " + user.id)
    
        console.log("Loading users from the database...")
        const users = await AppDataSource.manager.find(User)
        console.log("Loaded users: ", user)
    
        console.log("Here you can setup and run express / fastify / any other framework.")
    
    }).catch(error => console.log(error))
    


    const response = await resolve(event);
    return response;
}) satisfies Handle;

export const handle = sequence(first);
