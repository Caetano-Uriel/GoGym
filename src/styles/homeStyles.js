import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1a1a1a',
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
  welcomeText: {
    color: 'white',
    fontSize: 16,
  },
  username: {
    fontWeight: 'bold',
  },
  treinoBox: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
  },
  treinoText: {
    color: '#fff',
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'space-between',
  },
  desafioBox: {
    marginTop: 40,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 12,
  },
  desafioText: {
    color: '#f1f1f1',
    fontSize: 13,
    textAlign: 'center',
  },
});
