export interface IAuth {
  registerToken: any;
  userConnected: Boolean;
  user: any;
  registerErr: any;
  loginErr: any;
}
export interface IAdmin {
  allProducts: [];
  productsByCategory: object[];
  addProductErr: any;
  removeProductError: any;
  eddCategoryError: any;
}
