import { NgModule } from '@angular/core';
import { RouterModule, Routes as NgRoutes } from '@angular/router';
import { PageComponent } from '../layout/page/page.component';
import { CreateGameComponent } from '../pages/create-game/create-game.component';
import { HomeComponent } from '../pages/home/home.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { PlayGameComponent } from '../pages/play-game/play-game.component';
import { ViewGameComponent } from '../pages/view-game/view-game.component';
import { Routes } from './routes.enum';

const routes: NgRoutes = [
  {
    path: '', component: PageComponent, children: [
      {path: '', pathMatch: 'full', component: HomeComponent},
      {path: Routes.CREATE_GAME, component: CreateGameComponent},
      {path: Routes.PLAY_GAME, component: PlayGameComponent},
      {path: Routes.VIEW_GAME, component: ViewGameComponent},
      {path: '**', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
