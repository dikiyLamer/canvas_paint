import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintComponent } from './paint.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { SettingBarComponent } from './components/setting-bar/setting-bar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';



@NgModule({
  declarations: [
    PaintComponent,
    CanvasComponent,
    SettingBarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaintModule { }
