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
import { HonorsFormComponent } from './honors-form/honors-form.component';
import { InfoComponent } from './info/info.component';
import { InputComponent } from './input/input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { PointsFormComponent } from './points-form/points-form.component';
import { ScoreFormComponent } from './score-form/score-form.component';
import { ScoresheetComponent } from './scoresheet/scoresheet.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SuitCardComponent } from './suit-card/suit-card.component';
import { SuitSelectorComponent } from './suit-selector/suit-selector.component';

const COMPONENTS = [
  BarComponent,
  ButtonComponent,
  CardComponent,
  ErrorComponent,
  HonorsFormComponent,
  InfoComponent,
  InputComponent,
  GameTableComponent,
  NumberInputComponent,
  PointsFormComponent,
  ScoreFormComponent,
  ScoresheetComponent,
  StatisticsComponent,
  SuitCardComponent,
  SuitSelectorComponent
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
