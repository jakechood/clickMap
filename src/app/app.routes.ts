import { Routes } from '@angular/router';
import { WorldMapComponent } from './world-map/world-map.component';
import { DemographicInfoComponent } from './demographic-info/demographic-info.component';

export const routes: Routes = [
    {
        path: 'map',
        component: WorldMapComponent
    },
    {
        path: 'info',
        component: DemographicInfoComponent
    }

];
