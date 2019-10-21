export interface IAuth {
  userConnected: Boolean;
  user: any;
  registerErr: any;
  loginErr: any;
  step: Number;
  Register_details: any;
  id: String;
  phone: String;
  userId: String;
  password: String;
}
export interface IAdmin {
  allProducts: [];
  productsByCategory: any;
  addProductErr: any;
  removeProductError: any;
  eddCategoryError: any;
  fileName: String;
}
export interface Icart {
  status: any;
  cartId: any;
  items: any;
  order: any;
  cartError: any;
  addError: any;
  orderErr: any;
  totalPrice: any;
  date: any;
}

export interface Iproduct {
  allProducts: any;
  productDetails: any;
  category: any;
  productsByCategory: any;
  search: any;
  err: any;
}
