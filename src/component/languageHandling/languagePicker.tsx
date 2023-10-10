import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { i18n } = useTranslation(); //i18n instance

  //array with all supported languages
  const languages = [
    { name: "en", label: "English" },
    { name: "he", label: "Hebrew" },
  ];

  const LanguageItem = ({ name, label }: { name: string; label: string }) => (
    <Pressable
      style={styles.button}
      onPress={() => {
        i18n.changeLanguage(name); //changes the app language
        setModalVisible(!modalVisible);
      }}
    >
      <Text style={styles.textStyle}>{label}</Text>
    </Pressable>
  );

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {languages.map((lang) => (
              <LanguageItem {...lang} key={lang.name} />
            ))}
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>{i18n.language}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      margin: 10,
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  

export default LanguagePicker;