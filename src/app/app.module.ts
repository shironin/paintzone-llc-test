import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainViewComponent } from '@component/main-view/main-view.component';
import { HeaderComponent} from '@component/header/header.component';
import { AboutUsComponent} from '@component/about-us/about-us.component';
import { ServicesComponent} from '@component/services/services.component';
import { OurWorkComponent } from '@component/our-work/our-work.component';
import { CustomerReviewComponent} from '@component/customer-review/customer-review.component';
import { BottomComponent } from '@component/bottom/bottom.component';
import { FaqComponent } from '@component/faq/faq.component';
import { ContactComponent } from '@component/contact/contact.component';
import { FooterComponent } from '@component/footer/footer.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    HeaderComponent,
    AboutUsComponent,
    ServicesComponent,
    OurWorkComponent,
    CustomerReviewComponent,
    BottomComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
