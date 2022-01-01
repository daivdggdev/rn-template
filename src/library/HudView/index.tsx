/**
 * Created by chosenone on 2017/3/8.
 *
 */

import React from 'react';
import { View, Text, Keyboard, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';

import RootSiblings from 'react-native-root-siblings';

const DIMENSION = Dimensions.get('window');
let KEYBOARD_HEIGHT = 0;

Keyboard.addListener('keyboardDidChangeFrame', function ({ endCoordinates }) {
  KEYBOARD_HEIGHT = DIMENSION.height - endCoordinates.screenY;
});

const WINDOW_WIDTH = DIMENSION.width;

type Props = {
  visible: boolean;
  message: string;
  onHide: Function;
  onHidden: Function;
  onShow: Function;
  onShown: Function;
};

type State = {
  minWidth: number;
  visible: boolean;
  message: string;
};

class HudViewContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      minWidth: 0,
      visible: this.props.visible,
      message: this.props.message
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.visible !== nextProps.visible || this.props.message !== nextProps.message) {
      this.setState({
        visible: this.props.visible,
        message: this.props.message
      });
    }
  }

  componentWillMount() {
    this.props.onShow();
  }

  componentDidMount() {
    this.props.onShown();
  }

  componentWillUnMount() {
    this.props.onHide();
  }

  componentDidUnMount() {
    this.props.onHidden();
  }

  _onLayout(event: any) {
    let { height } = event.nativeEvent.layout;
    this.setState({ minWidth: height });
  }

  render() {
    if (!this.state.visible) {
      return null;
    }

    let position = {
      top: 0,
      bottom: KEYBOARD_HEIGHT
    };

    return (
      <View style={[styles.container, position]} pointerEvents="box-only">
        <View
          style={[styles.box, { minWidth: this.state.minWidth }]}
          onLayout={this._onLayout.bind(this)}>
          <ActivityIndicator animating={this.state.visible} color={'white'} size="large" />
          {this.state.message && (
            <Text style={{ color: 'white', marginTop: 12 }}>{this.state.message}</Text>
          )}
        </View>
      </View>
    );
  }

  static defaultProps = {
    visible: false,
    message: '',
    onHide: () => {},
    onHidden: () => {},
    onShow: () => {},
    onShown: () => {}
  };
}

class HudView extends React.Component<{}> {
  // static propTypes = HudViewContainer.propTypes;

  static show(message?: string, options?: Object) {
    return new RootSiblings(<HudViewContainer message={message} visible={true} {...options} />);
  }

  static hide(hud: RootSiblings) {
    if (hud instanceof RootSiblings) {
      hud.destroy();
    } else {
      console.warn(
        `Toast.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof hud}\` instead.`
      );
    }
  }

  _hud: RootSiblings = null as any;

  componentWillMount() {
    this._hud = new RootSiblings(<HudViewContainer {...this.props} />);
  }

  componentWillReceiveProps(nextProps: Props) {
    this._hud.update(<HudViewContainer {...nextProps} />);
  }

  componentWillUnmount() {
    this._hud.destroy();
  }

  render() {
    return <View />;
  }
}

export { RootSiblings as Manager };
export default HudView;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: WINDOW_WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  }
});
