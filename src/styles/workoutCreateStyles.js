import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    flex: 1,
    padding: 20,
  },
  title: {
    paddingTop:100,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    backgroundColor: "#2a2a2a",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 15,
    justifyContent: "space-between",
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#fff",
  },
  checkboxSelected: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: "#FFA500",
  },
  botao: {
    backgroundColor: "#00C851",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
