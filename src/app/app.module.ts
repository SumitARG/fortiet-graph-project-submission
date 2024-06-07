import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorrelationGraphComponent } from './components/correlation-graph/correlation-graph.component';
import { ContextMenuComponent } from './components/common/context-menu/context-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { GridTestComponent } from './components/grid-test/grid-test.component';
import { RequestsService } from './requests.service';

@NgModule({
  declarations: [
    AppComponent,
    CorrelationGraphComponent,
    ContextMenuComponent,
    GridTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    AgGridAngular,
    HttpClientModule
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
