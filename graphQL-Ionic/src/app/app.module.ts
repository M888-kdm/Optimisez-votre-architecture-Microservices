import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProduitsComponent } from './produits/produits.component';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { ProduitComponent } from './produits/produit/produit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommanderComponent } from './commander/commander.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [AppComponent,
    ProduitsComponent,
    ProduitComponent,
    LoginComponent,
    RegisterComponent,
    CommanderComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserModule,
    ReactiveFormsModule,
    ApolloModule, HttpClientModule,
    IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      {
        provide: APOLLO_OPTIONS,
        useFactory(httpLink: HttpLink) {
          return {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: 'http://localhost:4000/',
            }),
          };
        },
        deps: [HttpLink],
      },
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
