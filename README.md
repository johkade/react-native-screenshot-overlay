# react-native-screenshot-overlay

a simple semi-transparent screenshot overlay to achieve pixel perfect UI.

Inspiration for this was taken from [Reactotron](https://github.com/infinitered/reactotron) by Infinite Red,
who have removed this functionality from Reactotron in one of the latest versions.

## Installation

```sh
yarn add react-native-screenshot-overlay
```

## Why even use this?

Designers like pixel-perfect UIs. They will appreciate you implementing their design to perfection and potentially hate you for not doing so.
This little tool will help you double-check whether you nailed implementing the UI.

## The Workflow

- Your designer hands you: Figma files including spacings, colors, layout and so on. Most probably as a shared prototype.
- For designing the UI, your designer uses the dimensions of a fixed device - most likely an iPhone 11-13.
- You should use the same device as a simulator for development.
- Implement the UI using the prototype and the actual values as reference - most prototyping tools will nicely show you the actual margins, colors, etc - so don't just wing it.
- ( you should set up a custom design system in tandem with your ux-designer and implement it using a styling-library like [dripsy](https://github.com/nandorojo/dripsy), [restyle](https://github.com/Shopify/restyle) or something similar )
- as soon as you're finished with your screen, double-check the ui using `UIOverlay` with an actual screenshot/export from figma/XD.

## Usage

```js
import { UIOverlay } from 'react-native-screenshot-overlay';

const App = () => {
  return (
    <>
      <MyCoolApp />

      <UIOverlay src={require('./myImage.png')} opacity={0.1} />
    </>
  );
};
export default App;
```

## License

MIT
