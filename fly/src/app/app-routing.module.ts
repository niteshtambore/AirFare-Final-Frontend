import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { AirportDetailsComponent } from './airport-details/airport-details.component';
import { AirportListComponent } from './airport-list/airport-list.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CreateAirportComponent } from './create-airport/create-airport.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { ModifyScheduledFlightComponent } from './modify-scheduled-flight/modify-scheduled-flight.component';
import { SearchScheduledFlightComponent } from './search-scheduled-flight/search-scheduled-flight.component';
import { ShowScheduledFlightsComponent } from './show-scheduled-flights/show-scheduled-flights.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';

const routes: Routes = [
  // {path: '', redirectTo: 'booking',pathMatch: 'full'},
  {path: 'booking', component: CreateBookingComponent},
  {path: 'welcomeAdmin', component:WelcomeAdminComponent},
  {path: 'scheduledFlight/add', component:AddScheduledFlightComponent},
  {path: 'addFlight', component: CreateFlightComponent },
  {path: 'addAirport', component: CreateAirportComponent },
  {path: 'scheduledFlight/show', component:ShowScheduledFlightsComponent},
  {path: 'scheduledFlight/search', component:SearchScheduledFlightComponent},
  {path: 'scheduledFlight/modify', component: ModifyScheduledFlightComponent},
  {path: 'airports', component: AirportListComponent },
  {path: 'details/:airportCode', component: AirportDetailsComponent },
  {path: 'flights', component: FlightListComponent },
  {path: 'flightDetails/:flightNo', component: FlightDetailsComponent },
  {path: 'updateFlight/:flightNo', component: UpdateFlightComponent },
  {path: 'bookings', component: BookingListComponent},
  {path: 'addBooking', component: CreateBookingComponent},
  {path: 'bookingDetails/:id', component: BookingDetailsComponent},
  {path: 'updateBooking/:id', component: UpdateBookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents= [
  AddScheduledFlightComponent
  ]