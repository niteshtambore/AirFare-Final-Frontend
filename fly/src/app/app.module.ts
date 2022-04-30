import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { FormsModule } from '@angular/forms';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateAirportComponent } from './create-airport/create-airport.component';
import { ShowScheduledFlightsComponent } from './show-scheduled-flights/show-scheduled-flights.component';
import { SearchScheduledFlightComponent } from './search-scheduled-flight/search-scheduled-flight.component';
import { ModifyScheduledFlightComponent } from './modify-scheduled-flight/modify-scheduled-flight.component';
import { AirportListComponent } from './airport-list/airport-list.component';
import { AirportDetailsComponent } from './airport-details/airport-details.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeAdminComponent,
    HeaderComponent,
    FooterComponent,
    AddScheduledFlightComponent,
    CreateFlightComponent,
    CreateAirportComponent,
    ShowScheduledFlightsComponent,
    SearchScheduledFlightComponent,
    ModifyScheduledFlightComponent,
    AirportListComponent,
    AirportDetailsComponent,
    FlightListComponent,
    FlightDetailsComponent,
    UpdateFlightComponent,
    BookingListComponent,
    CreateBookingComponent,
    BookingDetailsComponent,
    UpdateBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
