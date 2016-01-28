#Anime.js
*Anime at your finger tips*

**anime.js** is a way for you to access info about anime quick and easy.

##Usage
1. Download `anime.js`
2. Link the external javascript on your document's `<head>`

  ```html
  <head>
    <script src="anime.js"></script>
  </head>
  ```
2. Add the class `animejs` to the element you want to animate.

3. Follow it by the **name or the id** of the anime you are looking for.

3. Finally you can referance any of the following:

  * `id`
  * `mal_id`
  * `slug`
  * `status`
  * `url`
  * `title`
  * `alternate_title`
  * `episode_count`
  * `episode_length`
  * `cover_image`
  * `synopsis`
  * `show_type`
  * `started_airing`
  * `finished_airing`
  * `community_rating`
  * `age_rating`
  * `genres`

Full example:
```html
<h class="animejs toradora title"></h>
```

```html
<img class="animejs toradora cover_image"></img>
```

##Refresh

You can refresh your content anytime with a simple javascript function call.
```javascript
updateAnimeJS();
```


## License
Anime.js is licensed under the MIT license. (http://opensource.org/licenses/MIT)
