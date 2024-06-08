
const request = require('supertest');
const {app} = require('../src/server.js');

describe("home page route shows and error", () => {

    // localhost:3000/v2/
    it("server returns and object with a message and error property", async () => {
        const response = await request(app).get("/v2/");
        console.log(response);
        expect(response.body.message).toBeTruthy();
    });
});

describe("v2/ functionality", () => {

    it("v2/ POS receives data correctly", async () => {
        const response = await request(app).post("/v2/").send({
            movie: "Dune"
        });

       expect(response.body.data.movie).toBe("Dune");
       expect(response.body.data.movie).toBeTruthy();
    });
});