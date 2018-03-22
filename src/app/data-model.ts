export class Product {
    name = '';
    cost = '';
    year = 2018;
    addresses: CompanyAddress[];
  }

  export class CompanyAddress {
    street = '';
    city   = '';
    state  = '';
    zip    = '';
  }
