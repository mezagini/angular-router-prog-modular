// Angular
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomPreloadService } from './services/custom-preload.service';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule), data: { preload: true } },
  { path: 'cms', loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
