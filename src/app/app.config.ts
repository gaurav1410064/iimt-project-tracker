import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA7VCJedyx2vn2_tJNs7Mdnl6msqN3SiIU",
  authDomain: "project-tracker-646bf.firebaseapp.com",
  projectId: "project-tracker-646bf",
  storageBucket: "project-tracker-646bf.appspot.com",
  messagingSenderId: "936287899402",
  appId: "1:936287899402:web:572614fb0992efca72f4f3"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(firebaseConfig))),
    importProvidersFrom(provideStorage(() => getStorage()))]
};
