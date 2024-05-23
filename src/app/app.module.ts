import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorrelationGraphComponent } from './components/correlation-graph/correlation-graph.component';
import { ContextMenuComponent } from './components/common/context-menu/context-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CorrelationGraphComponent,
    ContextMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
