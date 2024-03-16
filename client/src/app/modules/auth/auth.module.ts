import { TranslateService } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AuthRoutingModule } from './auth-routing.module';
import { ConstantsService, DBkeys } from '../../services/constants.service';
import { CurrencyService } from '../../services/currency.service';
import { ConfigurationService } from '../../services/configuration.service';
import { OidcHelperService } from '../../services/oidc-helper.service';
import { AuthService } from '../../services/auth.service';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { AddshopComponent } from './pages/addshop/addshop.component';
import { PersonalCabinetComponent } from './pages/personal-cabinet/personal-cabinet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    LoginComponent,
    AddproductComponent,
    AddshopComponent,
    PersonalCabinetComponent,
    CartComponent
  ],
  imports: [
    TooltipModule,    //add bootstrap
    CommonModule,     // надо для Router
    AuthRoutingModule,  // надо для Router локального(в этом модуле)
    FormsModule,    //add [(ngModel)]
    TypeaheadModule.forRoot(),  //add [typeahead]
  ],
  providers: [
    CurrencyService,
    ConstantsService,
    OidcHelperService,//
    ConfigurationService,//
    AuthService,
    DBkeys
    // TranslateService,//
  ],
  bootstrap: [
  ]
})
export class AuthModule { }
