import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment'; // Impor ta el entorno
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideFirestore(() => getFirestore()),
  provideFirebaseApp(() => initializeApp({"projectId":"ngbytes-fireauth-a77ba","appId":"1:700710575203:web:dc2f55c88dcb51c1d12c56","storageBucket":"ngbytes-fireauth-a77ba.appspot.com","apiKey":"AIzaSyCx9k_b0x6zWWMmSIMkSyD4ilnwgo2KelU","authDomain":"ngbytes-fireauth-a77ba.firebaseapp.com","messagingSenderId":"700710575203"}))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
