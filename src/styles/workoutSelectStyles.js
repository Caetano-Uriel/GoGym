import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 20,
    paddingTop: 40,
  },topBar: {
    flexDirection: 'row', // Ícone e texto lado a lado
    alignItems: 'center', // Alinha eles verticalmente
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 12, // espaço entre o ícone e o texto
  },
  
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#2a2a2a",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  nomeTreino: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detalhes: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 10,
  },
  timer: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  trocarTempoBtn: {
    marginTop: 10,
  },
});
