import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { IntroComponent } from "./intro/intro.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContentComponent } from "./content/content.component";
import { TeamComponent } from "./team/team.component";
import { FooterComponent } from "./footer/footer.component";
import { RoadmapComponent } from "./roadmap/roadmap.component";
import { HeaderComponent } from "./header/header.component";
import { SocialComponent } from "./social/social.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { AppRoutingModule } from "./app-routing.module";
import { ConfigService } from "./config.service";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { NgxPageScrollModule } from "ngx-page-scroll";
import {
  FontAwesomeModule,
  FaIconLibrary,
} from "@fortawesome/angular-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    ContentComponent,
    TeamComponent,
    FooterComponent,
    RoadmapComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPageScrollCoreModule.forRoot({ duration: 500 }),
    // NgxPageScrollModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faDiscord);
  }
}
