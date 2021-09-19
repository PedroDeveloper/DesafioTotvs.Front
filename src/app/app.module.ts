import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { TextInputComponent } from './components/shared/text-input/text-input.component';
import { PoModalModule } from '@po-ui/ng-components';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TextInputComponent,
    CustomModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PoModule,
    PoModalModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
