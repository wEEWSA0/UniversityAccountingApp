import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: []
})
export class AppModule { }