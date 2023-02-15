import { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  TextStyle,
  ViewStyle,
  StyleSheet
} from 'react-native';

// export interface SpinnerPropTypes {
//   cancelable?: boolean;
//   color?: string;
//   animation?: 'none' | 'slide' | 'fade';
//   overlayColor?: string;
//   size?: 'small' | 'large' | number; // size props does not support value normal
//   textContent?: string;
//   textStyle?: TextStyle;
//   visible?: boolean;
//   indicatorStyle?: ViewStyle;
//   customIndicator?: React.ReactNode;
//   children?: React.ReactNode;
//   spinnerKey?: string;
// }

export const Loading = ({
  cancelable = false,
  color = 'white',
  animation = 'none',
  overlayColor = 'rgba(0, 0, 0, 0.25)',
  size = 'large',
  textContent = '',
  textStyle,
  visible,
  indicatorStyle,
  customIndicator,
  children,
  spinnerKey
}) => {
  const [spinnerVisible, setSpinnerVisibility] = useState(visible);
  const close = () => {
    setSpinnerVisibility(false);
  };

  const handleOnRequestClose = () => {
    if (cancelable) {
      close();
    }
  };

  useEffect(() => {
    setSpinnerVisibility(visible);
  }, [visible]);

  const renderDefaultContent = () => {
    return (
      <View style={styles.background}>
        {customIndicator || (
          <ActivityIndicator
            color={color}
            size={size}
            style={[styles.activityIndicator, { ...indicatorStyle }]}
          />
        )}
        <View style={[styles.textContainer, { ...indicatorStyle }]}>
          <Text style={[styles.textContent, textStyle]}>{textContent}</Text>
        </View>
      </View>
    );
  };

  const renderSpinner = () => {
    const spinner = (
      <View
        style={[styles.container, { backgroundColor: overlayColor }]}
        key={spinnerKey || `spinner_${Date.now()}`}
      >
        {children || renderDefaultContent()}
      </View>
    );

    return (
      <Modal
        animationType={animation}
        onRequestClose={() => {
          handleOnRequestClose();
        }}
        supportedOrientations={['landscape', 'portrait']}
        transparent
        visible={spinnerVisible}
        statusBarTranslucent={true}
      >
        {spinner}
      </Modal>
    );
  };

  return renderSpinner();
};



const transparent = 'transparent';
const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1
  },
  background: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  container: {
    backgroundColor: transparent,
    bottom: 0,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  textContainer: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  textContent: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 50,
    top: 80
  }
});
