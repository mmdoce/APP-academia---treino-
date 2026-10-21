import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import AppToolbar from '../components/AppToobarl';

export default function ContactScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const { width } = useWindowDimensions();
  const telaGrande = width >= 650;

  function handleSubmit() {
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      Alert.alert(
        'Campos obrigatórios',
        'Preencha seu nome, e-mail e mensagem.'
      );
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
      Alert.alert(
        'E-mail inválido',
        'Digite um endereço de e-mail válido.'
      );
      return;
    }

    Alert.alert(
      'Mensagem enviada!',
      'Recebemos seu contato e retornaremos em breve.'
    );
  }

  function handleLigar() {
    Alert.alert('Central de Atendimento', 'Ligando para (11) 3456-7890...');
  }

  return (
    <View style={styles.screen}>
      <AppToolbar active="contact" />

      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              styles.card,
              telaGrande && styles.cardGrande,
            ]}
          >
            {/* ILUSTRAÇÃO */}
            <View
              style={[
                styles.illustration,
                telaGrande && styles.illustrationGrande,
              ]}
            >
              <View style={[styles.bubble, styles.bubbleOne]} />
              <View style={[styles.bubble, styles.bubbleTwo]} />
              <View style={[styles.bubble, styles.bubbleThree]} />
              <View style={[styles.bubble, styles.bubbleFour]} />

              <View style={styles.circle}>
                <Ionicons
                  name="fitness"
                  size={95}
                  color="#FF6B00"
                  style={styles.plane}
                />
              </View>

              <View style={styles.decorLineOne} />
              <View style={styles.decorLineTwo} />

              <Text style={styles.illustrationCaption}>
                ACADEMIA EXCLUSIVA · SUPORTE E CONTATO
              </Text>
            </View>

            {/* FORMULÁRIO E CONTATO */}
            <View
              style={[
                styles.form,
                telaGrande && styles.formGrande,
              ]}
            >
              <Text style={styles.title}>Fale Conosco</Text>

              <Text style={styles.subtitle}>
                Dúvidas sobre planos, horários de pico ou agendamento? Estamos aqui!
              </Text>

              {/* BLOCO DE INFORMAÇÕES DE CONTATO E BOTÃO DE LIGAR */}
              <View style={styles.infoBox}>
                <View style={styles.infoItem}>
                  <Ionicons name="call" size={16} color="#FF6B00" />
                  <Text style={styles.infoText}>(11) 3456-7890</Text>
                </View>

                <View style={styles.infoItem}>
                  <Ionicons name="mail" size={16} color="#FF6B00" />
                  <Text style={styles.infoText}>contato@academiaexclusiva.com</Text>
                </View>

                <View style={styles.infoItem}>
                  <Ionicons name="location" size={16} color="#FF6B00" />
                  <Text style={styles.infoText}>Av. Fitness, 500 - São Paulo, SP</Text>
                </View>

                <View style={styles.infoItem}>
                  <Ionicons name="time" size={16} color="#FF6B00" />
                  <Text style={styles.infoText}>Seg à Sáb: 06:00 - 23:00</Text>
                </View>

                <TouchableOpacity
                  style={styles.botaoLigar}
                  onPress={handleLigar}
                  activeOpacity={0.8}
                >
                  <Ionicons name="call-outline" size={16} color="#FFFFFF" />
                  <Text style={styles.botaoLigarTexto}>Ligar Agora</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="person"
                  size={17}
                  color="#666666"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Nome completo"
                  placeholderTextColor="#888888"
                  value={nome}
                  onChangeText={setNome}
                  autoCapitalize="words"
                  maxLength={100}
                />
              </View>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="mail"
                  size={17}
                  color="#666666"
                />
                <TextInput
                  style={styles.input}
                  placeholder="E-mail"
                  placeholderTextColor="#888888"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  maxLength={254}
                />
              </View>

              <View style={[styles.inputContainer, styles.messageBox]}>
                <TextInput
                  style={styles.messageInput}
                  placeholder="Escreva sua mensagem..."
                  placeholderTextColor="#888888"
                  value={mensagem}
                  onChangeText={setMensagem}
                  multiline
                  textAlignVertical="top"
                  maxLength={2000}
                />
              </View>

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
                activeOpacity={0.8}
              >
                <Text style={styles.submitText}>Enviar Mensagem</Text>
                <Ionicons
                  name="arrow-forward"
                  size={17}
                  color="#FFFFFF"
                />
              </TouchableOpacity>

              <Text style={styles.privacyText}>
                Seus dados serão usados exclusivamente para retornar o seu contato.
              </Text>

              <View style={styles.socials}>
                <TouchableOpacity
                  style={[styles.socialButton, styles.facebook]}
                  onPress={() =>
                    Alert.alert('Facebook', 'Redirecionando para o Facebook.')
                  }
                >
                  <Ionicons name="logo-facebook" size={18} color="#FFFFFF" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.socialButton, styles.twitter]}
                  onPress={() =>
                    Alert.alert('Twitter / X', 'Redirecionando para o Twitter.')
                  }
                >
                  <Ionicons name="logo-twitter" size={18} color="#FFFFFF" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.socialButton, styles.instagram]}
                  onPress={() =>
                    Alert.alert('Instagram', 'Redirecionando para o Instagram.')
                  }
                >
                  <Ionicons name="logo-instagram" size={18} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  keyboard: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 18,
  },
  card: {
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  cardGrande: {
    maxWidth: 920,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  illustration: {
    minHeight: 225,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  illustrationGrande: {
    flex: 1,
    minHeight: 480,
  },
  bubble: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 107, 0, 0.15)',
    borderRadius: 100,
  },
  bubbleOne: {
    width: 65,
    height: 65,
    top: 22,
    left: '15%',
  },
  bubbleTwo: {
    width: 22,
    height: 22,
    top: 95,
    left: '9%',
  },
  bubbleThree: {
    width: 35,
    height: 35,
    bottom: 28,
    right: '12%',
  },
  bubbleFour: {
    width: 15,
    height: 15,
    top: 42,
    right: '18%',
  },
  circle: {
    width: 175,
    height: 175,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 107, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-12deg' }],
  },
  plane: {
    transform: [{ rotate: '-8deg' }],
  },
  decorLineOne: {
    position: 'absolute',
    width: 30,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#FF6B00',
    bottom: 53,
    left: '18%',
    transform: [{ rotate: '-45deg' }],
  },
  decorLineTwo: {
    position: 'absolute',
    width: 22,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#FF6B00',
    bottom: 37,
    left: '23%',
    transform: [{ rotate: '-45deg' }],
  },
  illustrationCaption: {
    position: 'absolute',
    bottom: 12,
    fontSize: 9,
    letterSpacing: 1.5,
    color: '#FF6B00',
    fontWeight: '800',
  },
  form: {
    paddingHorizontal: 23,
    paddingTop: 25,
    paddingBottom: 22,
  },
  formGrande: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#121212',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: '#666666',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 16,
  },
  infoBox: {
    backgroundColor: '#F8F9FA',
    borderRadius: 14,
    padding: 12,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  infoText: {
    fontSize: 12,
    color: '#333333',
    fontWeight: '600',
  },
  botaoLigar: {
    height: 38,
    backgroundColor: '#FF6B00',
    borderRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 8,
  },
  botaoLigarTexto: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  inputContainer: {
    minHeight: 46,
    borderRadius: 24,
    backgroundColor: '#F1F5F9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#121212',
    fontSize: 13,
    paddingVertical: 10,
  },
  messageBox: {
    height: 105,
    alignItems: 'flex-start',
    paddingTop: 10,
    borderRadius: 15,
  },
  messageInput: {
    width: '100%',
    height: '100%',
    fontSize: 13,
    color: '#121212',
    padding: 0,
  },
  submitButton: {
    height: 46,
    borderRadius: 25,
    backgroundColor: '#FF6B00',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    marginTop: 16,
    elevation: 2,
    shadowColor: '#FF6B00',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  privacyText: {
    fontSize: 10,
    color: '#888888',
    lineHeight: 15,
    textAlign: 'center',
    marginTop: 13,
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginTop: 22,
  },
  socialButton: {
    width: 38,
    height: 38,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebook: {
    backgroundColor: '#1877F2',
  },
  twitter: {
    backgroundColor: '#000000',
  },
  instagram: {
    backgroundColor: '#E4405F',
  },
});