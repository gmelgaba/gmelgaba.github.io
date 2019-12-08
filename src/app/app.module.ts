import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogCardComponent } from './components/shared/blog-card/blog-card.component';
import { SocialComponent } from './components/shared/social/social.component';
import { PresentationComponent } from './components/home/presentation/presentation.component';
import { SectionTitleComponent } from './components/shared/section-title/section-title.component';
import { InterestsComponent } from './components/home/interests/interests.component';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { MyBlogComponent } from './components/home/my-blog/my-blog.component';
import { InterestCardComponent } from './components/home/interests/interest-card/interest-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogCardComponent,
    SocialComponent,
    PresentationComponent,
    SectionTitleComponent,
    InterestsComponent,
    AboutMeComponent,
    MyBlogComponent,
    InterestCardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


