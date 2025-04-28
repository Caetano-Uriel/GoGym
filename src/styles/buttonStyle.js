import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Estilo base para todos os botões
  buttonBase: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },

  // Variantes padrão
  defaultButton: {
    backgroundColor: "#555",
  },
  primaryButton: {
    backgroundColor: "#007bff",
  },
  secondaryButton: {
    backgroundColor: "#6c757d",
  },

  // Botão de login
  loginButton: {
    height: 48,
    backgroundColor: "#f8da11",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    width: "100%",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Botão com gradiente
  gradientButtonWrapper: {
    width: "47%",
  },
  gradientButton: {
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    margin: 10,
  },
  bordaBrancaWrapper: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 12,
    margin: 30,
  },
  bordaBrancaButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  bordaBrancaText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
});
