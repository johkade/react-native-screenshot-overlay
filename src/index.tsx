import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';

const defaultSrc = require('./overlay.jpeg');
const { height, width } = Dimensions.get('screen');

type UIOverlayProps = {
  src: ImageSourcePropType;
  opacity?: number;
};

export const UIOverlay = ({
  src = defaultSrc,
  opacity = 0.25,
}: UIOverlayProps) => {
  return __DEV__ ? (
    <View style={[StyleSheet.absoluteFillObject, { opacity }]}>
      <Image source={src} style={{ height, width }} resizeMode={'stretch'} />
    </View>
  ) : null;
};
