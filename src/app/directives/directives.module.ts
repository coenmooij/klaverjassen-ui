import { NgModule } from '@angular/core';
import { AutoFocusDirective } from './auto-focus.directive';

const DIRECTIVES = [
  AutoFocusDirective
];

@NgModule({
  imports: [],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class DirectivesModule {
}
