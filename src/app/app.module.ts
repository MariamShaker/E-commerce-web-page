import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummaryPipe } from './pipes/summary.pipe';

@NgModule({
  declarations: [AppComponent, SummaryPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    DashboardModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

  exports: [],
})
export class AppModule {}
