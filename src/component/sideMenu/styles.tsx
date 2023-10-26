import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
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
    width: '60%',
    height: '100%',
    backgroundColor: '#ffffff',
    paddingTop: 60,
  },
  menuItem: {
    marginBottom: 20,
    marginLeft: 30,
    flex: 1,
    borderBottomWidth: 1,
    // paddingVertical: 17,
    // paddingLeft: 11,
    // borderBottomColor: '#cbd2d9',
    // color: '#002b36',
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
