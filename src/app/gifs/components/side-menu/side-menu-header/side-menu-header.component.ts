import { Component } from '@angular/core';
import { environment } from '@environments/environment.development';
// import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'gifs-side-menu-header',
  templateUrl: './side-menu-header.component.html',
  // styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  // host: { class: 'contents' },
  standalone:true
})
export class SideMenuHeaderComponent {
  envs = environment;
}
