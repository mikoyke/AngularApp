import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private registrationData: any = {};

  setStepData(step: string, data: any): void {
    this.registrationData = { ...this.registrationData, [step]: data };
  }

  getRegistrationData(): any {
    return this.registrationData;
  }
}
