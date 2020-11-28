import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { PostComponent } from './pages/post/post.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent, canActivate: [ AuthGuard ] },
  { path: 'post/:id', component: PostComponent, canActivate: [ AuthGuard ] },
  { path: 'comentarios/:postId', component: ComentariosComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
