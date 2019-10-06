import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';
import { BarComponent } from './bar/bar.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ErrorComponent } from './error/error.component';
import { GameTableComponent } from './game-table/game-table.component';
import { InputComponent } from './input/input.component';
import { ScoresheetComponent } from './scoresheet/scoresheet.component';

const COMPONENTS = [
  BarComponent,
  ButtonComponent,
  CardComponent,
  ErrorComponent,
  InputComponent,
  GameTableComponent,
  ScoresheetComponent
];

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule,
    FormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule {
}
