import { BaseToastProps, BaseToast} from 'react-native-toast-message';

interface ToastConfigProps extends BaseToastProps {
  style?: object;
  contentContainerStyle?: object;
  text1Style?: object;
}

const ToastConfig: { [key: string]: (props: ToastConfigProps) => JSX.Element } = {
  success: (props: ToastConfigProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#339900', ...props.style }}
      contentContainerStyle={{ paddingHorizontal: 15, ...props.contentContainerStyle }}
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
      style={{ borderLeftColor: '#cc3300', ...props.style }}
      contentContainerStyle={{ paddingHorizontal: 15, ...props.contentContainerStyle }}
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
      style={{ borderLeftColor: '#ffcc00', ...props.style }}
      contentContainerStyle={{ paddingHorizontal: 15, ...props.contentContainerStyle }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        ...props.text1Style,
      }}
    />
  ),
};

export default ToastConfig;
