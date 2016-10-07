import {Component} from '@angular/core';
import {Routes} from '@angular/router';

// Shared service
import {SampleService} from './services/sample.service';

// Multiplatform components
import {HomeComponent} from './pages/home/home.component';
import {ProductsComponent} from './pages/products/products.component';


@Component({
    moduleId: module.id,
    selector: 'pang-app',
    providers: [SampleService],
    templateUrl: 'app.component.tns.html'
})
export class AppComponent {
    constructor() {
        this.hideActionBarInAndroid();
    }

    private hideActionBarInAndroid() {
        if (!global.web) { // global.web is defined during compile time in webpack, making this code unreachable in WEB.
            try {
                let topmost = require('ui/frame').topmost();
                topmost.currentPage.actionBarHidden = true;
            } catch (e) {
                console.error(e);
            }
        }
    }
}

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent }
];
