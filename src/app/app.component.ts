import { ChangeDetectionStrategy, Component } from '@angular/core';
let darkMode = localStorage.getItem('darkMode');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'portfolio2.0';
  public darkMode = false;
  public openNavMenu = false;

  constructor() {
    if (darkMode === 'enabled') {
      this.enableDarkMode();
    }
  }

  public toggleDarkMode() {
    this.darkMode = !this.darkMode;
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  private enableDarkMode() {
    this.darkMode = true;
    localStorage.setItem('darkMode', 'enabled');
    document.body.classList.add('darkMode');
  }

  private disableDarkMode() {
    this.darkMode = false;
    localStorage.setItem('darkMode', 'disabled');
    document.body.classList.remove('darkMode');
  }

  public toggleMenu() {
    this.openNavMenu = !this.openNavMenu;
  }
}
