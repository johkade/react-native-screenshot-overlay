# react-native-screenshot-overlay

a simple screenshot overlay to achieve pixel perfect ui.

## Installation

```sh
yarn add react-native-screenshot-overlay
```

## Why even?

Designers like pixel-perfect UIs. They will appreciate you implementing their design to perfection and potentially hate you for not doing so.
This little tool will help you double-check whether you nailed implementing the UI.

## The Workflow

- Your designer hands you: Figma files including spacings, colors, layout and so on. Most probably as a shared prototype.
- For designing the UI, your designer uses the dimensions of a fixed device - most likely an iPhone 11-13.
- You should use the same device as a simulator for development.
- Implement the UI using the prototype and the actual values as reference - most prototyping tools will nicely show you the actual margins, colors, etc - so don't just wing it.
- ( most likely you will use a proper styling system like dripsy, restyle or something similar )
- as soo as you're finished, double-check your code using the UIOverlay with an actual screenshot of the screen you implemented.

## Usage

```js
import { UIOverlay } from 'react-native-screenshot-overlay';

const App = () => {
  return (
    <>
      <MyCoolApp />

      <UIOverlay src={require('./myImage.jpeg')} opacity={0.1} />
    </>
  );
};
export default App;
```

## License

MIT
