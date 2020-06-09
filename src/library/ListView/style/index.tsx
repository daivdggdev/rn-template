import EStyleSheet from 'react-native-extended-stylesheet';
import { ms } from 'react-native-size-matters';

export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    padding: ms(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
