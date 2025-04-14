import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#1a1a1a",
    flexGrow: 1,
  },
  header: {
    paddingTop:100,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
    gap: 12,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "600",
  },
  username: {
    fontWeight: "bold",
    color: "#ffcc00",
  },
  treinoBox: {
    backgroundColor: "#2a2a2a",
    borderRadius: 16,
    padding: 18,
    marginBottom: 70,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  treinoTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  treinoText: {
    color: "#e1e1e1",
    marginBottom: 4,
    fontSize: 14,
  },
  buttonsContainer: {
    padding: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 20,
  },
  desafioBox: {
    marginTop: 80,
    backgroundColor: "#2a2a2a",
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
  },
  desafioText: {
    color: "#f1f1f1",
    fontSize: 14,
  },
});
