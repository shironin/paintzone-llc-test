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
import { ElementScrollAppearDirective } from './directive/element-scroll-appear.directive';
import { CareerModalComponent } from '@component/career-modal/career-modal.component';
import { AppComponent } from './app.component';
import { EventsService } from './service/events.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from '@component/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioPageComponent } from '@component/portfolio-page/portfolio-page.component';
import { PortfolioComponent } from '@component/portfolio/portfolio.component';

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
    FooterComponent,
    ElementScrollAppearDirective,
    CareerModalComponent,
    MainPageComponent,
    PortfolioPageComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
