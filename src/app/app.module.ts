import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ToolbarMenuMoreDirective } from './toolbar-menu-more.directive';
import { ToolbarMenuDirective } from './toolbar-menu.directive';
import { ToolbarComponent } from './toolbar/toolbar.component';


export const CDK_MODULES = [
  PortalModule,
];

export const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ToolbarMenuDirective,
    ToolbarMenuMoreDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ...CDK_MODULES,
    ...MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
