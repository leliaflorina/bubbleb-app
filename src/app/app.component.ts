import { DOCUMENT } from "@angular/common";
import {
  Component,
  Inject,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from "@angular/core";
import { PageScrollService } from "ngx-page-scroll-core";
import { ConfigService } from "./config.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  header: {
    heading: string;
    headingtext: string;
    buttontext: string;
    buttonlink: string;
  };

  title = "BubbleBeesNfts";
  public activeSection: number = 1;

  @ViewChildren("home, roadmap, team, savethebees") elms: QueryList<any>;
  detectedElms = [];

  detectElms() {
    const detectedElms = [];
    this.elms.forEach((elm, index) => {
      if (isInViewport(elm.nativeElement)) {
        detectedElms.push(elm.nativeElement.id);
      }
    });
    this.detectedElms = detectedElms;
    this.activeSection= detectedElms[0];
  }
  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private config: ConfigService,
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'resize', this.detectElms.bind(this));
    this.renderer.listen('window', 'scroll', this.detectElms.bind(this));
  }

  ngOnInit() {
    this.header = this.getHeader();
  }

  ngAfterViewInit () {
    setTimeout(this.detectElms.bind(this))
  }

  getHeader() {
    return this.config.getConfig().header;
  }

  scrollTo(e: HTMLElement, i: any) {
    this.pageScrollService.scroll({
      scrollTarget: e,
      document: this.document,
    });
    this.activeSection = i;
  }
}

function isInViewport (elm) {
  var elementTop = elm.offsetTop;
  var elementBottom = elementTop + elm.offsetHeight;

  // in this specific case the scroller is document.documentElement (<html></html> node)
  var viewportTop = document.documentElement.scrollTop;
  var viewportBottom = viewportTop + document.documentElement.clientHeight;

  return elementBottom > viewportTop && elementTop < viewportBottom;
}
