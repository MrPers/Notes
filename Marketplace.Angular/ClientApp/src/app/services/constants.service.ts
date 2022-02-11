import { Injectable } from '@angular/core';
import { UserManagerSettings } from "oidc-client";
import { CurrencyService } from "./currency.service";
import * as Oidc from 'oidc-client';

export const URLpath = "https://localhost:5001/";

const Authority = "https://localhost:5001";//
const Silent_redirect_uri = "https://localhost:5001/refresh";
const Redirect_uri = 'https://localhost:5001/auth-callback';//
const Post_logout_redirect_uri = 'https://localhost:5001/';//
const Response_type = "code";//code id_token
const AutomaticSilentRenew = true;//
const LoadUserInfo = true;
const Scope = "openid profile";//
const Client_id = 'angular_id';//

export function getClientSettings(): UserManagerSettings {
  return {
    userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }), //чтоб хронилась сесия localStore
    authority: Authority,
    silent_redirect_uri : Silent_redirect_uri,
    redirect_uri: Redirect_uri,
    post_logout_redirect_uri: Post_logout_redirect_uri,
    response_type: Response_type,
    automaticSilentRenew: AutomaticSilentRenew, //указывающий, должна ли быть автоматическая попытка обновить токен доступа до истечения срока его действия
    scope: Scope,
    client_id: Client_id,
    loadUserInfo: LoadUserInfo, // загрузкой дополнительных идентификационных данных, чтобы заполнить пользователя profile
    // mergeClaims: MergeClaims,
    // filterProtocolClaims: FilterProtocolClaims, //следует ли удалять утверждения протокола OIDC из profile
    // checkSessionInterval: 50000, //Интервал в мс для проверки сеанса пользователя
    // silentRequestTimeout: 50000, //количество миллисекунд ожидания возврата беззвучного
  };

}

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor(private currencyService:CurrencyService) {
  }

}

export class User{
  id:any;
  userName:string = "";
  password:string = "";
  email:string = "";
}
export class Product{
  id:any;
  name:string = "";
  netPrice:number = 0;
  photo:string = "";
  productGroupId:any;
  pricesAverage:boolean = false;
}
export class PageProduct{
  description:string = "";
  id:any;
  name:string = "";
  photo:string = "";
  productGroupId:any;
  productGroupName:string = "";
}
export class PagePriceProduct{
  id:any;
  netPrice:number = 0;
  numberProduct:number = 0;
  shopName:string = "";
}
export class CommentProduct{
  id:any;
  productId:any;
  departureDate: string = "";
  userId:any;
  userName:string = "";
  text:string = "";
}
export class ProductGroup {
  id:any;
  name:string = "";
  isChecked: boolean = false;
}
// export class PageMenuProduct{
//   productId:string = "";
//   price:number = 0;
//   pricesBoolean:boolean = true;
//   productGroupID:number = 0;
//   productName:string = "";
//   photo:string = "";
// }
// export class CommentProduct {
//   id:any;
//   departureDate: string = "";
//   productId:number = 0;
//   userId:number = 0;
//   text:string = "";
// }
// export class Price {
//   id:string = "";
//   netPrice:number = 0;
//   numberProduct:number = 0;
//   productId:string = "";
//   shopId:number = 0;
// }
// export class Product {
//   id:string = "";
//   name:string = "";
//   photo:string = "";
//   productGroupID:number = 0;
// }
// export class Shop {
//   id:number = 0;
//   name:string = "";
// }
// export class PageShopProduct{
//   shopId:any;
//   shopName:string = "";
//   listShopProduct:ListShopProduct []=[];
// }
// export class PageCabinet{
//   userId:any;
//   userName:string = "";
//   email:string = "";
//   //list coment
// }


      //   this.productGroups =data["productGroupsResult"];
      //   this.commentProducts =data["commentProductsResult"];
      //   this.users =data["usersResult"];

      //   for (let index = 0; index < this.products.length; index++) {
      //     var price:number = 0;
      //     var prices:number[] = [];
      //     var pricesBoolean:boolean = false;



      //   for (let index = 0; index < this.commentProducts.length; index++) {
      //     var userName: string = "";

      //     this.pageShopProducts.push({
      //       shopId: this.shops[index].id,
      //       shopName: this.shops[index].name,
      //       listShopProduct:listShopProducts,
      //     });
      //   }
