import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { HomeComponent } from './shared/home/home.component';
import { ProjectDetailComponent } from './shared/project-detail/project-detail.component';
import { AddProjectComponent } from './shared/add-project/add-project.component';
import { AddMemberComponent } from './shared/add-member/add-member.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'project-detail',
        component: ProjectDetailComponent
    },
    {
        path: 'add-project',
        component: AddProjectComponent
    },
    {
        path: 'add-member',
        component: AddMemberComponent
    }
];
