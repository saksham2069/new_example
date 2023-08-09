import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { UserComponent } from './user/user.component';
import { TabsComponent } from './tabs/tabs.component';



const routes: Routes = [
  {path:'', redirectTo:'user', pathMatch:'full'},
  { path: 'user', component: UserComponent },
  {path:'tabs',component:TabsComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
   declarations: [	
     
   ]
})
export class MainRoutingModule { }
