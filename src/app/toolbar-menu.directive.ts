import { CdkPortal } from '@angular/cdk/portal';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appToolbarMenu]'
})
export class ToolbarMenuDirective extends CdkPortal {
}
