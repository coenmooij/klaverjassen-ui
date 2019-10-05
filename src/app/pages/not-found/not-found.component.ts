import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../../routing/routes.enum';

@Component({
  selector: 'app-not-found',
  templateUrl: 'not-found.component.html'
})
export class NotFoundComponent {
  constructor(private router: Router) {
  }

  onClick(): void {
    this.router.navigate([Routes.HOME]);
  }
}
