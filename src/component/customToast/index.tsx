import Toast from 'react-native-toast-message';

interface ToastProps {
  type: 'success' | 'error' | 'info'; 
  title: string;
  text: string;
}

const CustomToast = (props: ToastProps): void => {
  const { type, title, text, ...otherProps } = props;
  Toast.show({
    type: type,
    text1: title,
    text2: text,
    autoHide: true,
    ...otherProps,
  });
};

export default CustomToast;
