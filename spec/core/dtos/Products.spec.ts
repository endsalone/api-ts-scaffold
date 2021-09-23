import "jasmine";

import { ProductsDto } from "core/dtos/ProductsDto";
import { MessageErrors } from "core/messages/MessageErrors";

describe("Products entity", () => {
  it("should return error when send more than the max allowed", () => {
    expect(
      () => {
        const product: ProductsDto = new ProductsDto();
        product.name = "Lopado­temacho­selacho­galeo­kranio­leipsano­drim­hypo­trimmato­silphio­karabo­melito­katakechy­meno­kichl­epi­kossypho­phatto­perister­alektryon­opte­kephallio­kigklo­peleio­lagoio­siraio­baphe­tragano­pterygon";
        product.description = "Description";
        product.category = "Category";
        product.isActive = true;
        product.price = 200;
        product.quantity = 2;
      }
    ).toThrow(new Error(MessageErrors.NAME_MAXIMUM))

    expect(
      () => {
        const products: ProductsDto = new ProductsDto();
        products.description = "Lopado­tefffmacho­selacho­galeo­kranio­leipsano­drim­hypo­trimmato­silphio­ka Lopado­temacho­selacho­galeo­kranio­leipsano­drim­hypo­trimmato­silphio­karabo­melito­katakechy­meno­kichl­epi­kossypho­phatto­perister­alektryon­opte­kephallio­kigklo­peleio­lagoio­siraio­baphe­tragano­pterygon Lopado­temacho­selacho­galeo­kranio­leipsano­drim­hypo­trimmato­silphio­karabo­melito­katakechy­meno­kichl­epi­kossypho­phatto­perister­alektryon­opte­kephallio­kigklo­peleio­lagoio­siraio­baphe­tragano­pterygon";
      }
    ).toThrow(new Error(MessageErrors.DESCRIPTION_MAXIMUM))
  });
})
