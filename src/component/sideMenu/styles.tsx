import {StyleSheet} from 'react-native';
import theme from '../../style';

const Styles = StyleSheet.create({
  logoImageContent: {
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd2d9',
  },
  logoImage: {
    margin: 60,
    marginTop: 0,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  burgerMenuWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  modal: {
    margin: 0,
    flex: 1,
  },
  modalContent: {
    height: '100%',
    width: '60%',
    backgroundColor: theme.colors.background,
    paddingTop: 60,
  },
  menuItem: {
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    paddingVertical: 17,
    paddingLeft: 11,
    borderBottomColor: theme.colors.grey,
  },
  privacyPolicy: {
    position: 'absolute',
    bottom: 0,
    left: 30,
    right: 30,
    borderBottomColor: theme.colors.grey,
  },
  privacyPolicyText: {
    color: theme.colors.text
  },
  menuItemText: {
    fontSize: 18,
    color: theme.colors.text,
  },
  languagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  languageButton: {
    marginBottom: 10,
    marginLeft: 45,
  },
  languageButtonText: {
    color: theme.colors.text,
  },
});

export default Styles;
