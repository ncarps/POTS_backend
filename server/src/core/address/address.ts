export type TAddress = {
  building_name: string;
  city: string;
  street: string;
  zipcode: string;
};

const createMakeAddress = () => (address: TAddress) => {
  const { building_name, city, street, zipcode } = address;
  if (!building_name) {
    throw new Error("Building is required.");
  }

  if (!city) {
    throw new Error("City is required.");
  }

  if (!street) {
    throw new Error("Street is required.");
  }

  return address;
};

export { createMakeAddress };
