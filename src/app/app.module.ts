import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { MenuPopupComponent } from './menu/menu-popup/menu-popup.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: "Sahar's Kitchen"}
  },
  {
    path: 'location',
    component: LocationComponent,
    data: { title: "Sahar's Kitchen Location"}
  },
  {
    path: 'reservations',
    component: ReservationComponent,
    data: { title: "Sahar's Kitchen Reservation"}
  },
  { path: 'menu', component: MenuComponent },
  { path: 'contact',component: ContactsComponent }
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
    MenuPopupComponent
  ],
  entryComponents: [MenuPopupComponent],
  imports: [
    BrowserModule,
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
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
