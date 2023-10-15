import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  modalContent: {
    width: '60%',
    height: '100%',
    backgroundColor: '#ffffff',
    paddingTop: 60,
  },
  menuItem: {
    marginBottom: 20,
    marginLeft: 30,
  },
  menuItemText: {
    fontSize: 18,
    color: '#333333',
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
    color: '#ffffff',
  },
});

export default Styles;
