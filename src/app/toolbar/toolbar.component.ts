import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit } from '@angular/core';
import { ToolbarMenuMoreDirective } from '../toolbar-menu-more.directive';
import { ToolbarMenuDirective } from '../toolbar-menu.directive';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [ './toolbar.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {

  /**
   * タイトル
   */
  @Input()
  title = '';

  /**
   * メニューボタン群
   */
  @ContentChild(ToolbarMenuDirective)
  menuButtons?: ToolbarMenuDirective;

  /**
   * Moreなメニューボタン群
   */
  @ContentChild(ToolbarMenuMoreDirective)
  moreMenuButtons?: ToolbarMenuMoreDirective;

  constructor() {
  }

  ngOnInit() {
  }

}
