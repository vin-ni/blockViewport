# blockViewport.js

This plugin allows to `block` different viewport widths with a custom message. Useful when sending demos that only work for certain sizes.
View the demo [here](http://cloud.sansho.studio/hosting/blockViewport/).

![Pixel Wave Animation Preview](/dev/img/blockViewport.gif "Pixel Wave Animation Preview")

## Install
At the bottom of your body:
```javascript
<script src="js/blockViewport.js"></script>
// it's not on a cdn yet, but for now you can also use:
// <script src="https://cloud.sansho.studio/hosting/blockViewport/blockViewport.js"></script>

blockViewport = new BlockViewport([
        {
        color: 'pink',
        fontColor: 'black',
        text: 'Mobile Viewport Blocked',
        widthStart: 0,
        widthEnd: 480
        }
]);
```

## Options
When adding the blocker, you can different options to style the message:

| Description                                       | Name       | Default                                                   |
|---------------------------------------------------|------------|-----------------------------------------------------------|
| The background color. Takes all valid css colors. | color      | #000000                                                   |
| The font color. Takes all valid css colors.       | fontcolor  | #FFFFFF                                                   |
| The message that should be displayed.             | text       | This viewport is blocked. Please change your browser size |
| Min. width of the blocker                         | widthStart | 0                                                         |
| Max. width of the blocker                         | widthEnd   | 9999                                                      |

## Full Example with options
You can also chain several blockers in the array.
```javascript
<script src="js/blockViewport.js"></script>
// it's not on a cdn yet, but for now you can also use:
// <script src="https://cloud.sansho.studio/hosting/blockViewport/blockViewport.js"></script>

blockViewport = new BlockViewport([
        {
        color: '#3300FF',
            fontColor: '#FFFFFF',
            text: 'Please view this on a mobile device',
            widthStart: 1000,
            widthEnd: 1400
        },{
        color: 'pink',
        fontColor: 'black',
        text: 'Mobile Viewport Blocked',
        widthStart: 0,
        widthEnd: 480
        }
]);
```

### Contribution
If anyone wants to contribute, just fork the project or write me at vinzenz@sansho.studio :)
