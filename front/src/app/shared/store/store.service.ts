import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToolSettings } from '../interfaces/settings.interface';

@Injectable({ providedIn: 'root' })
export class StoreService {
  private canvasSubject$!: BehaviorSubject<HTMLCanvasElement>;
  private settingsSunject$!: BehaviorSubject<ToolSettings>;

  constructor() {}

  setCanvas(canvas: HTMLCanvasElement) {
    if (!this.canvasSubject$) {
      this.canvasSubject$ = new BehaviorSubject(canvas);
      return;
    }
    this.canvasSubject$!.next(canvas);
  }

  getCanvas() {
    return this.canvasSubject$!.asObservable();
  }

  setSettings(settings: ToolSettings) {
    if (!this.settingsSunject$) {
      this.settingsSunject$ = new BehaviorSubject(settings);
      return;
    }
    this.settingsSunject$!.next(settings);
  }

  getSettings() {
    return this.settingsSunject$!.asObservable();
  }
}
