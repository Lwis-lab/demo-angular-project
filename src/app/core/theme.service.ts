import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode = true; // Default to dark mode

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if running in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Load the user's theme preference from localStorage (if available)
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';
      this.applyTheme();
    }
  }

  // Toggle between light and dark mode
  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    // Save preference only in the browser
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }
    this.applyTheme();
  }

  // Apply the current theme to the body
  private applyTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    }
  }

  // Get the current theme state
  isDarkTheme(): boolean {
    return this.isDarkMode;
  }
}
