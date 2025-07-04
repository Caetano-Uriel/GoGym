import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    flex: 1,
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#1f1f1f",
    color: "#fff",
    fontSize: 16,
    marginBottom: 12,
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 10,
  },

  inputSmall: {
    flex: 1,
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#1f1f1f",
    color: "#fff",
    fontSize: 16,
  },

  subtitle: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 10,
  },
  item: {
    backgroundColor: "#2a2a2a",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: "column",
  },

  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
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
    marginRight: 12,
  },

  checkboxSelected: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: "#FFA500",
  },
  footerButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  footerButton: {
    flex: 1,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#6C63FF", 
    alignItems: "center",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#222",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 10, 
  },
  modalTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: "#fff",
    marginBottom: 12,
    backgroundColor: "#1f1f1f",
  },
  modalButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  modalLabel: {
  color: "#fff",
  fontSize: 16,
  marginBottom: 8,
  marginTop: 8,
},

modalPickerWrapper: {
  borderWidth: 1,
  borderColor: "#444",
  borderRadius: 8,
  backgroundColor: "#1f1f1f",
  marginBottom: 12,
  overflow: "hidden",
},

modalPicker: {
  color: "#fff",
  borderRadius: 8,
  borderColor: "#444",
  backgroundColor: "#1f1f1f",
  height: 50,
},

});
