import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#1a1a1a",
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#2a2a2a",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  nomeTreino: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  detalhes: {
    color: "#ccc",
    marginVertical: 5,
  },
  botao: {
    backgroundColor: "#FFA500",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 10,
  },
  botaoTexto: {
    color: "#000",
    fontWeight: "bold",
  },
  timer: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  trocarTempoBtn: {
    alignSelf: "center",
    marginTop: 8,
    padding: 8,
  },
  trocarTempoText: {
    color: "#FFA500",
    fontSize: 14,
  },
});
