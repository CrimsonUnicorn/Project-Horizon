import { delay, HttpResponse } from "msw";
import { http } from "msw/core/http";

export const handlers = [
    http.get('https://jsonplaceholder.typicode.com/profile', async() => {
        await delay(1000);
        return HttpResponse.json({
            name: "aman",
            email: "aman@gmail.com",
            theme: "light",
            language: "english",
            notifications: true
        });
        
    }),
];