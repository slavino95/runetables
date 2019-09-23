import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
