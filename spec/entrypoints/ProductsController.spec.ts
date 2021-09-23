// import "jasmine";
// import supertest, { SuperTest, Test } from "supertest";
//
// import {DatabaseMock} from "../common/DatabaseMock";
// import { Helper } from "../common/Helper";
//
// xdescribe("ProductsController", () => {
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
//   afterAll(async () => {
//     await serverMock.stop();
//     await databaseMock.stopConnection();
//   });
//
//   it('should get all products', async () => {
//     await request
//       .get("/products/")
//       .set('Accept', 'application/json')
//       .buffer(true)
//       .parse(Helper.parseJson)
//       .expect(200);
//   });
//
//   it('should get one product', async () => {
//     await request
//       .get("/products/banana")
//       .set('Accept', 'application/json')
//       .expect(200);
//   });
//
//   it('should create one product', async () => {
//     await request
//       .post("/products/")
//       .type("json")
//       .send({
//         "category": "Category",
//         "description": "My description",
//         "isActive": true,
//         "name": "My product",
//         "price": 20,
//         "quantity": 2,
//       })
//       .buffer(true)
//       .parse(Helper.parseJson)
//       .expect((res) => {
//         expect(res.statusCode).toEqual(201);
//         expect(res.body.name).toEqual("My product");
//       });
//   });
// });
