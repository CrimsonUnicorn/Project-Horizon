import { delay, HttpResponse, http } from "msw";

export const handlers = [
    http.get('https://jsonplaceholder.typicode.com/profile', async () => {
        await delay(1000);

        // Test 401
        // return new HttpResponse(null, { status: 401 });

        // Test 403
        // return new HttpResponse(null, { status: 403 });

        // Test Validation Error
        // return HttpResponse.json(
        //   {
        //     errors: {
        //       name: "Name is required",
        //       email: "Invalid email",
        //     },
        //   },
        //   { status: 422 }
        // );

        return HttpResponse.json({
            name: "aman",
            email: "aman@gmail.com",
            theme: "light",
            language: "english",
            notifications: true
        });

    }),
];