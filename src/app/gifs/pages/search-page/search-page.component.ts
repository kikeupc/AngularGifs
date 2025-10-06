import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  // styles: [':host{display:contents}'], // Makes component host as if it was not there, can offer less css headaches. Use @HostBinding class approach for easier overrides.
  // host: { class: 'contents' },
  imports:[GifListComponent]
})
export default class SearchPageComponent {
  // @HostBinding('class') protected readonly class = 'contents'; // Makes component host as if it was not there, can offer less css headaches. Assumes .contents{display:contents} css class exits
  // constructor() {}

  gifService = inject( GifService );
  gifs = signal<Gif[]>([]);

  onSearch(query: string){
    this.gifService.searchGifs(query)
        .subscribe( resp => {
          this.gifs.set(resp);
        } )
  }
}
