import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostListComponent } from "./posts/posts-list/posts-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", component: PostListComponent },
  { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  {
    path: "edit/:postId",
    component: PostCreateComponent,
    canActivate: [AuthGuard]
  },
  // { path: "auth", loadChildren: "./auth/auth.module#AuthModule" } /* For an old Versions of Angular */
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
