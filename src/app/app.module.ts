import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainViewComponent } from '@component/main-view/main-view.component';
import { HeaderComponent} from '@component/header/header.component';
import { AboutUsComponent} from '@component/about-us/about-us.component';
import { ServicesComponent} from '@component/services/services.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    HeaderComponent,
    AboutUsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
