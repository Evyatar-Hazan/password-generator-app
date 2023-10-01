import {
    View,
    StyleSheet,
    Text, 
    TouchableOpacity, 
  } from 'react-native';
import { languageHandling, currentLanguage, changeLanguage } from '../languageHandling';


const Sidebar = (currentLanguage_: any, setCurrentLanguage: any) => {
    // const [currentLanguage_, setCurrentLanguage] = useState(currentLanguage()); 

    const handleChangeLanguage = () => {
      const newLanguage = currentLanguage_ === 'en' ? 'he' : 'en'; // Toggle between 'en' and 'es' for English and Spanish, update with your language codes
      setCurrentLanguage(newLanguage);
      changeLanguage(newLanguage); // Call a function to change the language in your language handling module
    };

    return (
    <View>
    <TouchableOpacity
            style={styles.languageButton}
            onPress={handleChangeLanguage}
          >
            <Text style={styles.languageButtonText}>
              {languageHandling('inputScreen.language')}
            </Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    languageButton: {
      borderRadius: 25,
      marginTop: 10,
      backgroundColor: '#3498db', // Change the button color as needed
      padding: 10,
      alignItems: 'center',
    },
    languageButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    }
})

export default Sidebar