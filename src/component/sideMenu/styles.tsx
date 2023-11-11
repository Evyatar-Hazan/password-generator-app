import {StyleSheet} from 'react-native';

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
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    borderRadius: 100, // Set to half of width/height to make it round
    // resizeMode: 'cover', // or 'contain' based on your design preferences
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
    backgroundColor: '#ffffff',
    paddingTop: 60,
  },
  menuItem: {
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    paddingVertical: 17,
    paddingLeft: 11,
    borderBottomColor: '#cbd2d9',
  },
  privacyPolicy: {
    position: 'absolute',
    bottom: 0,
    left: 30,
    right: 30,
    borderBottomColor: '#cbd2d9',
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
