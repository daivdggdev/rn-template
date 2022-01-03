import Toast, { ToastOptions } from 'react-native-root-toast';

const defalutOptions = {
  duration: Toast.durations.SHORT,
  position: Toast.positions.CENTER,
  shadow: false
};

export default {
  show: (message: string, options?: ToastOptions) => {
    Toast.show(message, { ...defalutOptions, ...options });
  },

  hide: (toast: any) => {
    Toast.hide(toast);
  }
};
