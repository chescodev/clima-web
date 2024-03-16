import { type APIRoute } from "astro";
import { getSession } from "auth-astro/server";

export const POST: APIRoute = async ({ request }) => {
    const session = await getSession(request);

    if(!session) {
        return new Response('Unauthorized', { status: 401 })
    }

    const username = session?.user?.name

    if (!username) {
        return new Response ('Unauthorized', { status: 401 })
    }
    
     
    
    // ...

    return new Response("Hello, world!")

}