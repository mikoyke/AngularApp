import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UpgradePlanComponent } from './features/registers/upgrade-plan/upgrade-plan.component';
import { AuthService } from './core/services/auth.service';

export function initializeApp(authService: AuthService): () => Promise<void> {
  return () => authService.initiallizeAuthStatus();
}
@NgModule({
  declarations: [AppComponent, UpgradePlanComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AuthService],
      multi: true,
    },
  ],
})
export class AppModule {}
