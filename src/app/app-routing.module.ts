import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TestComponent} from './test/test.component';
import {Test1Component} from './test1/test1.component';


const routes: Routes = [{
  path: 'test',
  component: TestComponent,
}, {
  path: 'test1',
  component: Test1Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
