import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxGalleryModule } from 'ngx-gallery';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './contacts/location/location.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { MenuPopupComponent } from './menu/menu-popup/menu-popup.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './cart/check-out/check-out.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { OrderConfirmationComponent } from './cart/order-confirmation/order-confirmation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FlyerComponent } from './menu/flyer/flyer.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: "Kohinoor Restaurant"}
  },
  {
    path: 'location',
    component: LocationComponent,
    data: { title: "Kohinoor Restaurant Location"}
  },
  {
    path: 'reservations',
    component: ReservationComponent,
    data: { title: "Kohinoor Restaurant Reservation"}
  },
  { path: 'menu', component: MenuComponent },
  { path: 'contact',component: ContactsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrderConfirmationComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'flyer', component: FlyerComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LocationComponent,
    ContactsComponent,
    MenuComponent,
    ReservationComponent,
    HomeComponent,
    MenuPopupComponent,
    CartComponent,
    CheckOutComponent,
    CarouselComponent,
    OrderConfirmationComponent,
    GalleryComponent,
    FlyerComponent
  ],
  entryComponents: [MenuPopupComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatBadgeModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    NgxGalleryModule,
    RecaptchaFormsModule,
    RecaptchaModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
