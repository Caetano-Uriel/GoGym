import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native-web";

export default StyleSheet.create({
  topImage:{
    marginTop: 20, 
    resizeMode: "contain",
  },
  
  background: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "85%",
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    color: "#fff",
    marginBottom: 5,
    marginTop: 10,
  },
  registerText: {
    color: "#fff",
    marginTop: 15,
  },
  registerLink: {
    color: "#3399FF",
    fontWeight: "bold",
  },
});
