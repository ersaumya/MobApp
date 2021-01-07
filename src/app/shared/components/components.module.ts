import { LogoComponent } from "./logo/logo.component";
import { SliderComponent } from "./slider/slider.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [SliderComponent, LogoComponent],
  imports: [CommonModule, IonicModule],
  exports: [SliderComponent, LogoComponent],
})
export class ComponentsModule {}
