import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  header: {
    heading: string;
    headingtext: string;
    buttontext: string;
    buttonlink: string;
  };

  title = 'BubbleBeesNfts';
  public activeSection :number= 1;

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private config: ConfigService
  ) {}
  
  ngOnInit() {
    this.header = this.getHeader();
  }

  getHeader() {
    return this.config.getConfig().header;
  }
  scrollTo(e: HTMLElement, i:any) {
    this.pageScrollService.scroll({
      scrollTarget: e,
      document: this.document,
    });
    this.activeSection = i;
  }
}
