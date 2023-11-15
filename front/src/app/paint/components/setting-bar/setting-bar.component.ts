import { Component } from '@angular/core';
import { StoreService } from 'src/app/shared/store/store.service';

@Component({
  selector: 'app-setting-bar',
  templateUrl: './setting-bar.component.html',
  styleUrls: ['./setting-bar.component.scss'],
})
export class SettingBarComponent {
  constructor(private storeService: StoreService) {
    storeService.setSettings({ lineWidth: 1 });
  }

  lineWidthChanged(event: Event) {
    this.storeService.setSettings({
      lineWidth: +(event.target as HTMLInputElement).value,
    });
  }
}
