import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {}

  // Toggle the theme using the service
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  // Check if dark mode is enabled
  isDarkTheme(): boolean {
    return this.themeService.isDarkTheme();
  }
}
