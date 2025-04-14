import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    flex: 1,
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#2a2a2a",
    color: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#2a2a2a",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nome: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  treino: {
    color: "#ccc",
    fontSize: 13,
  },
  botao: {
    backgroundColor: "#FFA500",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  botaoTexto: {
    color: "#000",
    fontWeight: "bold",
  },
  botaoDesafio: {
    marginTop: 20,
    backgroundColor: "#FFA500",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
});
