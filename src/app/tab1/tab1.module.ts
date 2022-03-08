import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { VehicleRentComponent } from './components/vehicle-rent/vehicle-rent.component';
import { PostComponent } from './components/vehicle-rent/post/post.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, VehicleRentComponent, PostComponent]
})
export class Tab1PageModule {}
