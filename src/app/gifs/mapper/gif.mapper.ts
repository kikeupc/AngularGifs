import { Title } from "@angular/platform-browser";
import { GiphyItem } from "../interfaces/giphy.interfaces";
import { Gif } from "../interfaces/gif.interface";

export class GifMapper{
  static mapGiphyItemToGif(item: GiphyItem): Gif{
    return{
      id: item.id,
      title: item.title,
      url: item.url,
    }
  }

  static mapGiphyItemsToGifArray( items: GiphyItem[] ): Gif[]{
    return items.map(this.mapGiphyItemToGif);
  }
}
