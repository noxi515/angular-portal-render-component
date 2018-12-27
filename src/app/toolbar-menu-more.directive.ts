import { CdkPortal } from '@angular/cdk/portal';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appToolbarMenuMore]'
})
export class ToolbarMenuMoreDirective extends CdkPortal {
}
