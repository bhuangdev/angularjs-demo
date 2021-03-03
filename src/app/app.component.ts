import { Component, OnInit } from '@angular/core';
import { TabsetConfig } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TabsetConfig]
})
export class AppComponent implements OnInit {
  public title: string = 'Demo';
  public showMessage: string = '';
  public twolevelshow:boolean = false;
  public tab2ShowState:boolean = false;
  public tab3ShowState:boolean = false;
  public vofShowState:boolean = false;
  public sbShowState:boolean = false;
  public abShowState:boolean = false;
  public rbShowState:boolean = false;
  public tabShowState:boolean = true;

  constructor(){};

  public ngOnInit(): void {
    //this.onShow();
  }

  public onShow(): void {
    debugger
    this.showMessage = 'Good'
  }

  public changeRoute() {
		
	}

  public show2level(){
    if(!this.twolevelshow){
      this.twolevelshow = true;
    }else{
      this.twolevelshow = false;
    }
    
  }

  public addTab(){
    this.tabShowState = true;
    this.tab2ShowState = true;
  }

  public showVof(){
    this.tabShowState = true;
    this.vofShowState = true;
  }

  public showSb(){
    this.tabShowState = true;
    this.sbShowState = true;
  }

  public showVb(){
    this.tabShowState = true;
    this.abShowState = true;
  }

  public showRb(){
    this.tabShowState = true;
    this.rbShowState = true;
  }

  public closeAllTabs(){
    this.tab2ShowState = false;
    this.vofShowState = false;
    this.sbShowState = false;
    this.abShowState = false;
    this.rbShowState = false;
  }

  public queryShow(){
    this.tabShowState = true;
  }

  public querynotShow(){
    this.tabShowState = false;
  }
}

