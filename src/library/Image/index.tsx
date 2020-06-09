// @ts-nocheck
import React, { Component } from 'react';
import * as ReactNative from 'react-native';
import { CachedImage } from 'react-native-cached-image';
import FitImage, { IFitImageProps } from 'react-native-fit-image';

// 将各个扩展Image属性剥离原始图片属性
type FitImageProps = Omit<IFitImageProps, keyof ReactNative.ImageProps>;
type CachedImageProps = Omit<CachedImage.Image, keyof ReactNative.Image>;

export interface ImageProps
  extends ReactNative.ImageProps,
    Partial<FitImageProps>,
    Partial<CachedImageProps> {
  type?: 'normal' | 'cache' | 'fit';
}

export default class Image extends Component<ImageProps, any> {
  static defaultProps = {
    type: 'normal',
    fitProps: { indicator: true },
  };

  render() {
    let component = null;
    const { type } = this.props;
    switch (type) {
      case 'cache':
        component = <CachedImage {...this.props} />;
        break;

      case 'fit':
        component = <FitImage {...this.props} />;
        break;

      default:
        component = <ReactNative.Image {...this.props} />;
        break;
    }

    return component;
  }
}
