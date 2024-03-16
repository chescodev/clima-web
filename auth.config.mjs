import Senati from 'auth/core/providers/senati';
import { defineConfig } from 'astro/config';

export default defineConfig({
    providers: [
        Senati({
            clientId: import.meta.env.SENATI_CLIENT_ID,
            clientSecret: import.meta.env.SENATI_CLIENT_SECRET,
        }),
    ],
})