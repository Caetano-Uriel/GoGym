import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#1a1a1a",
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    gap: 12,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
  },
  username: {
    fontWeight: "bold",
    color: "#ffcc00",
  },
  treinoBox: {
    backgroundColor: "#2a2a2a",
    borderRadius: 16,
    padding: 18,
    marginBottom: 30,
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
  },
  desafioBox: {
    marginTop: 40,
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
