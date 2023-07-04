import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Add the Firebase configuration
const firebaseConfig = {
  // Your Firebase configuration
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent] // Ensure the AppComponent is included here
})
export class AppModule {}

  
