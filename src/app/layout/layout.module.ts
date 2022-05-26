import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../views/header/header.component';
import { LayoutRoutingModule } from './layout-router.module';
import { LayoutComponent } from './layout.component';
import { FooterModule } from '../views/footer/footer.module';




@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FooterModule
  ],
  exports: [LayoutComponent],
})
export class LayoutModule { }
