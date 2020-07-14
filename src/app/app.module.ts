import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './shared/data.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { TrazilicaComponent } from './trazilica/trazilica.component';
import { FormsModule } from '@angular/forms';
import { PrettyNumPipe } from './shared/pretty-num.pipe';
import { CapitalisePipe } from './shared/capitalise.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrazilicaComponent,
    PrettyNumPipe,
    CapitalisePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
