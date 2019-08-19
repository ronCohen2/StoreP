export interface IAuth {
  registerToken: any;
  userConnected: Boolean;
  user: any;
  registerErr: any;
  loginErr: any;
}
export interface IAdmin {
  allProducts: [];
  productsByCategory: any;
  addProductErr: any;
  removeProductError: any;
  eddCategoryError: any;
}
export interface Icart {
  items: any;
  order: any;
  cartError: any;
  addError: any;
  orderErr: any;
}

export interface Iproduct {
  allProducts: any;
  productDetails: any;
  category: any;
  productsByCategory: any;
  search: any;
  err: any;
}
