import { makeAddress } from "./";

describe("Address", () => {
  it("must have a building", () => {
    const addressInput = {
      city: "city",
      building_name: "",
      street: "bui",
      zipcode: "bui"
    };
    expect(() => makeAddress(addressInput)).toThrow("Building is required.");
  });
  it("must have a city", () => {
    const addressInput = {
      city: "",
      building_name: "building",
      street: "bui",
      zipcode: "bui"
    };
    expect(() => makeAddress(addressInput)).toThrow("City is required.");
  });

  it("must have a street", () => {
    //givens
    const addressInput = {
      city: "a",
      building_name: "a",
      street: "",
      zipcode: "a"
    };
    expect(() => makeAddress(addressInput)).toThrow("Street is required.");
  });
});
