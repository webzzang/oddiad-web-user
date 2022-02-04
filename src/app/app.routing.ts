import {Routes} from '@angular/router';
import {SimpleLayoutComponent} from './layout/SimpleLayout/SimpleLayout.component';
import {HomeComponent} from './contents/home/home.component';
import {LiveComponent} from './contents/live/live.component';
import {FaqComponent} from './contents/faq/faq.component';
import {SampleComponent} from './contents/sample/sample.component'
import {NoPageComponent} from './contents/no-page/no-page.component'
import {SessionGuard} from './contents/account/session.guard';
import {LoginComponent} from "./contents/account/login/login.component";
import {NoSessionGuard} from "./contents/account/noSession.guard";
// Layouts

export const AppRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent,
      canActivate:[NoSessionGuard]
    },
    {
        path: '', component: SimpleLayoutComponent,
        children: [
            {
                path: 'live',
                component: LiveComponent
            },
            {
                path: 'zone',
                loadChildren: () => import('./contents/zone/zone.module').then(m => m.ZoneModule)
            },
            {
                path: 'subway',
                loadChildren: () => import('./contents/subway/subway.module').then(m => m.SubwayModule)
            },
            {
                path: 'partnership',
                loadChildren: () => import('./contents/partnership/partnership.module').then(m => m.PartnershipModule)
            },
            {
                path: 'faq',
                component: FaqComponent
            },
            {
                path: 'notice',
                loadChildren: () => import('./contents/notice/notice.module').then(m => m.NoticeModule)
            },
            {
                path:'sample',
                component: SampleComponent
            },
            {
                path: 'account',
                loadChildren: () => import('./contents/account/account.module').then(m => m.AccountModule)
            },
            {
                path: 'mypage',
                loadChildren: () => import('./contents/mypage/mypage.module').then(m => m.MypageModule),
                canActivate: [SessionGuard]
            },
            {
                path: 'inquire',
                loadChildren: () => import('./contents/inquire/inquire.module').then(m => m.InquireModule)
            },
            {
                path:'**',
                component: NoPageComponent
            }
        ]
    }

];
