// import "jasmine";
// import supertest, { SuperTest, Test } from "supertest";
//
// import {DatabaseMock} from "../common/DatabaseMock";
// import { Helper } from "../common/Helper";
//
// xdescribe("CategoriesController", async () => {
//
//   let request: SuperTest<Test>;
//
//   const serverMock: Helper = Helper.instance;
//   const databaseMock: DatabaseMock = DatabaseMock.instance;
//
//   beforeAll( async () => {
//     serverMock.serverStart();
//     await databaseMock.createConnection();
//     request = supertest.agent(serverMock.server.app);
//   });
//
//   it('should create one category', async () => {
//     await request
//       .post("/categories/")
//       .type("json")
//       .send({
//         "name": "Custom Category",
//       })
//       .buffer(true)
//       .parse(Helper.parseJson)
//       .expect((res) => {
//         expect(res.statusCode).toEqual(201);
//         expect(res.body.name).toEqual("Custom Category");
//       });
//   });
//
// });
