import {BaseToastProps, BaseToast} from 'react-native-toast-message';
import theme from '../../style';

interface ToastConfigProps extends BaseToastProps {
  style?: object;
  contentContainerStyle?: object;
  text1Style?: object;
}

const ToastConfig: {[key: string]: (props: ToastConfigProps) => JSX.Element} = {
  success: (props: ToastConfigProps) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: theme.colors.success, ...props.style}}
      contentContainerStyle={{
        paddingHorizontal: 15,
        ...props.contentContainerStyle,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        ...props.text1Style,
      }}
    />
  ),
  error: (props: ToastConfigProps) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: theme.colors.error, ...props.style}}
      contentContainerStyle={{
        paddingHorizontal: 15,
        ...props.contentContainerStyle,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        ...props.text1Style,
      }}
    />
  ),
  info: (props: ToastConfigProps) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: theme.colors.info, ...props.style}}
      contentContainerStyle={{
        paddingHorizontal: 15,
        ...props.contentContainerStyle,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        ...props.text1Style,
      }}
    />
  ),
};

export default ToastConfig;
