import {App, IonicApp, Page} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import * as helpers from '../../../directives/helpers';

@Page({
  templateUrl: './build/pages/menus/basic/menu-home.html',
  directives: [forwardRef(() => helpers.AndroidAttribute)]
})
export class BasicPage{
  constructor(app: IonicApp) {
    this.app = app;
    this.app.getComponent('leftMenu').enable(true);
  }
}

@Page({
  templateUrl: './build/pages/menus/basic/menu-home.html',
  directives: [forwardRef(() => helpers.AndroidAttribute)]
})
export class PageOne{
  constructor() {
  }
}

@Page({
  templateUrl: './build/pages/menus/basic/menu-friends.html',
  directives: [forwardRef(() => helpers.AndroidAttribute)]
})
export class PageTwo{
}

@Page({
  templateUrl: './build/pages/menus/basic/menu-events.html',
  directives: [forwardRef(() => helpers.AndroidAttribute)]
})
export class PageThree{
}
