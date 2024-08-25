import supertest from "supertest";
import { web } from "../src/application/web";
import { logger } from "../src/application/logging";
import { UserTest } from "./test-utils";

describe("POST /api/users", () => {

    afterEach(async () => {
        await UserTest.delete();
    });

    it("should reject register new user if request is invalid", async () => {
        const response = await supertest(web)
            .post("/api/users")
            .send({
                username: "",
                name: "",
                password: "",
            });

        logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    });

    it("should register new user", async () => {
        const response = await supertest(web)
            .post("/api/users")
            .send({
                username: "test",
                name: "test",
                password: "test",
            });

        expect(response.status).toBe(200);
        expect(response.body.data.username).toBe("test");
        expect(response.body.data.name).toBe("test");
    });
});


describe("POST /api/users/login", () => {
    beforeEach(async () => {
        await UserTest.create();
    })

    afterEach(async () => {
        await UserTest.delete();
    });

    it("should be able to login", async () => {
        const response = await supertest(web)
            .post("/api/users/login")
            .send({
                username: "test",
                password: "test",
            });

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.username).toBe("test");
        expect(response.body.data.name).toBe("test");
        expect(response.body.data.token).toBeDefined();
    });

    it("should reject login user if username is wrong", async () => {
        const response = await supertest(web)
            .post("/api/users/login")
            .send({
                username: "salah",
                password: "test",
            });

        logger.debug(response.body);
        expect(response.status).toBe(401);
        expect(response.body.errors).toBeDefined();
    });

    it("should reject login user if password is wrong", async () => {
        const response = await supertest(web)
            .post("/api/users/login")
            .send({
                username: "test",
                password: "salah",
            });

        logger.debug(response.body);
        expect(response.status).toBe(401);
        expect(response.body.errors).toBeDefined();
    });
});

describe("GET /api/users/current", () => {

    beforeEach(async () => {
        await UserTest.create();
    });

    afterEach(async () => {
        await UserTest.delete();
    });

    it("should be able to get user", async () => {
        const response = await supertest(web)
            .get("/api/users/current")
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.username).toBe("test");
        expect(response.body.data.name).toBe("test");
    });

    it("should reject get user if token is invalid", async () => {
        const response = await supertest(web)
            .get("/api/users/current")
            .set("X-API-TOKEN", "salah");

        logger.debug(response.body);
        expect(response.status).toBe(401);
        expect(response.body.errors).toBeDefined();
    });

});

describe("PATCH /api/users/current", () => {

    beforeEach(async () => {
        await UserTest.create();
    });

    afterEach(async () => {
        await UserTest.delete();
    });

    it("should be able to update user", async () => {
        const response = await supertest(web)
            .patch("/api/users/current")
            .set("X-API-TOKEN", "test")
            .send({
                password: "test",
                name: "test",
            });

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.username).toBe("test");
        expect(response.body.data.name).toBe("test");
    });

    it("should reject update user if token is invalid", async () => {
        const response = await supertest(web)
            .patch("/api/users/current")
            .set("X-API-TOKEN", "salah")
            .send({
                password: "test",
                name: "test",
            });

        logger.debug(response.body);
        expect(response.status).toBe(401);
        expect(response.body.errors).toBeDefined();
    });
});

describe("PATCH /api/users/current", () => {

    beforeEach(async () => {
        await UserTest.create();
    });

    afterEach(async () => {
        await UserTest.delete();
    });

    it("should be able to logout user", async () => {
        const response = await supertest(web)
            .patch("/api/users/current")
            .set("X-API-TOKEN", "test");

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data).toBeDefined();
    });

    it("should reject logout user if token is invalid", async () => {
        const response = await supertest(web)
            .patch("/api/users/current")
            .set("X-API-TOKEN", "salah");

        logger.debug(response.body);
        expect(response.status).toBe(401);
        expect(response.body.errors).toBeDefined();
    });
});