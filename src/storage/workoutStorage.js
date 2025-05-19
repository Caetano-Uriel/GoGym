import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "treinos";

export async function carregarTreinos() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Erro ao carregar treinos:", e);
    return [];
  }
}

export async function salvarTreinos(lista) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
    console.log('WORKOUTSTORAGE: Treinos salvos com sucesso.');
    return true;
  } catch (e) {
    console.error("WORKOUTSTORAGE: Erro ao salvar treinos:", e);
    return false;
  }
}
