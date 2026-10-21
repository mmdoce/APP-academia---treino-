
import { View, Text, StyleSheet } from 'react-native';

export default function RecursosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nossos recursos</Text>
      <Text>Em breve, você poderá explorar cada funcionalidade.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9EB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#253B7D',
    marginBottom: 12,
  },
});
