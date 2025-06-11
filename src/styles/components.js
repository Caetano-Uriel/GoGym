// styles/components.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // ===== Button =====
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

  // ===== Input =====
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 4,
    marginLeft: 8,
  },
  input: {
    width: "100%",
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#1f1f1f",
    color: "#fff",
    fontSize: 16,
  },
  // ===== Navbar (Search) =====
  navbarContainer: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    // fundo escuro
    borderWidth: 1,
    borderColor: "#333", // borda mais suave
    placeholderTextColor: "#fff", // placeholder branco
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#fff", // texto branco
    paddingVertical: 0, // alinha melhor verticalmente
  },
});
