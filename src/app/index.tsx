import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    if (!email.trim() || !senha) {
      Alert.alert(
        'Atenção',
        'Preencha o usuário e a senha.'
      );
      return;
    }

    if (
      email.trim().toLowerCase() === 'aluno' &&
      senha === '123456'
    ) {
      router.replace('/home');
    } else {
      Alert.alert(
        'Login inválido',
        'Usuário ou senha incorretos.'
      );
    }
  }

  // Função para limpar os campos de input
  function handleLimpar() {
    setEmail('');
    setSenha('');
  }

  return (
    <KeyboardAvoidingView
      style={styles.fundo}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.cartao}>
          <Image
            source={require('../../assets/login.png')}
            style={styles.ilustracao}
            resizeMode="cover"
          />

          <View style={styles.conteudo}>
            <Text style={styles.titulo}>Bem-vindo!</Text>

            <Text style={styles.subtitulo}>
              Acesse sua conta para gerenciar seus treinos sem filas.
            </Text>

            <View style={styles.campo}>
              <Ionicons
                name="person-outline"
                size={18}
                color="#FF6B00"
              />

              <TextInput
                style={styles.input}
                placeholder="Usuário ou E-mail"
                placeholderTextColor="#888888"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.campo}>
              <Ionicons
                name="lock-closed-outline"
                size={18}
                color="#FF6B00"
              />

              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#888888"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>

            {/* BOTÃO ENTRAR */}
            <TouchableOpacity
              style={styles.botaoLogin}
              onPress={handleLogin}
              activeOpacity={0.8}
            >
              <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>

            {/* BOTÃO LIMPAR CAMPOS */}
            <TouchableOpacity
              style={styles.botaoLimpar}
              onPress={handleLimpar}
              activeOpacity={0.8}
            >
              <Text style={styles.textoBotaoLimpar}>Limpar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#121212',
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },

  cartao: {
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  ilustracao: {
    width: '100%',
    height: 190,
    backgroundColor: '#1E1E1E',
  },

  conteudo: {
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 28,
  },

  titulo: {
    color: '#121212',
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },

  subtitulo: {
    color: '#666666',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 24,
    lineHeight: 18,
  },

  campo: {
    height: 46,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 12,
    backgroundColor: '#F8F9FA',
  },

  input: {
    flex: 1,
    marginLeft: 10,
    color: '#121212',
    fontSize: 13,
    paddingVertical: 0,
  },

  botaoLogin: {
    height: 46,
    backgroundColor: '#FF6B00',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#FF6B00',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  botaoLimpar: {
    height: 46,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#121212',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

  textoBotaoLimpar: {
    color: '#121212',
    fontSize: 14,
    fontWeight: '800',
  },
});