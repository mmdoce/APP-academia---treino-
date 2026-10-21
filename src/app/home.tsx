import AppToolbar from '../components/AppToobarl';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const recursos = [
  {
    titulo: 'Zero Fila',
    descricao: 'Controle de lotação em tempo real para você treinar sem revesar.',
    cor: '#FF6B00',
    icone: 'flash-outline' as const,
  },
  {
    titulo: 'Treino Inteligente',
    descricao: 'Aparelhos liberados e sugeridos conforme o seu fluxo.',
    cor: '#1E1E1E',
    icone: 'fitness-outline' as const,
  },
  {
    titulo: 'Agendamento VIP',
    descricao: 'Garanta seu horário nos equipamentos mais concorridos.',
    cor: '#2D3748',
    icone: 'calendar-outline' as const,
  },
  {
    titulo: 'Foco Total',
    descricao: 'Ambiente planejado para máxima performance e agilidade.',
    cor: '#FF6B00',
    icone: 'rocket-outline' as const,
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.tela}>
      <AppToolbar active="home" />

      <StatusBar
        barStyle="dark-content"
        background-Color="#F8F9FA"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {/* BANNER PRINCIPAL */}
        <View style={styles.hero}>
          <View style={styles.ilustracao}>
            <View style={styles.circuloFundo} />

            <View style={styles.pessoas}>
              <View style={[styles.pessoa, styles.pessoaLaranja]}>
                <Ionicons name="barbell" size={42} color="#FFFFFF" />
              </View>

              <View style={[styles.pessoa, styles.pessoaPreta]}>
                <Ionicons name="fitness" size={54} color="#FFFFFF" />
              </View>

              <View style={[styles.pessoa, styles.pessoaCinza]}>
                <Ionicons name="flash" size={38} color="#FFFFFF" />
              </View>
            </View>

            <View style={styles.notebook}>
              <Ionicons
                name="timer-outline"
                size={24}
                color="#FF6B00"
              />
              <Text style={styles.notebookTexto}>Treine Sem Revesar</Text>
            </View>
          </View>

          <View style={styles.heroTexto}>
            <View style={styles.etiqueta}>
              <Text style={styles.etiquetaTexto}>
                ACADEMIA EXCLUSIVA · ZERO FILAS
              </Text>
            </View>

            <Text style={styles.heroTitulo}>
              Treine no seu ritmo,{"\n"}sem revesar nada.
            </Text>

            <Text style={styles.heroDescricao}>
              Chega de esperar os aparelhos liberarem. Nossa academia 
              controla o fluxo para garantir seu espaço e agilidade total.
            </Text>

            <View style={styles.acoes}>
              <TouchableOpacity
                style={styles.botaoPrincipal}
                onPress={() => router.push('/recursos')}
              >
                <Text style={styles.botaoPrincipalTexto}>
                  Conhecer aparelhos
                </Text>
                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color="#FFFFFF"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoSecundario}
                onPress={() => router.push('/recursos')}
              >
                <Text style={styles.botaoSecundarioTexto}>
                  Saiba mais
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* FAIXA DE BENEFÍCIOS */}
        <View style={styles.beneficios}>
          <View style={styles.beneficio}>
            <Ionicons name="checkmark-circle" size={16} color="#FF6B00" />
            <Text style={styles.beneficioTexto}>Zero Revezamento</Text>
          </View>

          <View style={styles.beneficio}>
            <Ionicons name="speedometer" size={16} color="#FF6B00" />
            <Text style={styles.beneficioTexto}>Fluxo Controlado</Text>
          </View>

          <View style={styles.beneficio}>
            <Ionicons name="star" size={16} color="#FF6B00" />
            <Text style={styles.beneficioTexto}>Espaço Premium</Text>
          </View>
        </View>

        {/* SEÇÃO DE RECURSOS */}
        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>
            Performance sem Espera
          </Text>

          <Text style={styles.secaoDescricao}>
            Tudo o que você precisa para otimizar o seu treino e evoluir muito mais rápido.
          </Text>

          <View style={styles.grade}>
            {recursos.map((recurso, index) => (
              <TouchableOpacity
                key={recurso.titulo}
                style={[
                  styles.card,
                  { backgroundColor: recurso.cor },
                ]}
                onPress={() => router.push('/recursos')}
                activeOpacity={0.85}
              >
                <View style={styles.iconeCard}>
                  <Ionicons
                    name={recurso.icone}
                    size={22}
                    color="#FFFFFF"
                  />
                </View>

                <Text style={styles.cardTitulo}>
                  {recurso.titulo}
                </Text>

                <Text style={styles.cardDescricao}>
                  {recurso.descricao}
                </Text>

                <View style={styles.cardRodape}>
                  <Text style={styles.cardLink}>
                    Ver detalhes
                  </Text>
                  <Ionicons
                    name="arrow-forward"
                    size={15}
                    color="#FFFFFF"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* RODAPÉ */}
        <View style={styles.footer}>
          <Ionicons name="flash" size={18} color="#FF6B00" />
          <Text style={styles.footerTexto}>
            Academia Exclusiva · Treine sem revesar. · Versão: 1.0
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scroll: {
    paddingBottom: 28,
  },
  hero: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 14,
    borderRadius: 18,
    overflow: 'hidden',
    marginTop: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  ilustracao: {
    height: 220,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  circuloFundo: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 107, 0, 0.15)',
    top: 10,
  },
  pessoas: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 8,
    marginTop: 10,
  },
  pessoa: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  pessoaLaranja: {
    width: 65,
    height: 95,
    backgroundColor: '#FF6B00',
  },
  pessoaPreta: {
    width: 80,
    height: 120,
    backgroundColor: '#1E1E1E',
  },
  pessoaCinza: {
    width: 60,
    height: 85,
    backgroundColor: '#4A5568',
  },
  notebook: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    elevation: 3,
  },
  notebookTexto: {
    fontSize: 11,
    fontWeight: '800',
    color: '#121212',
  },
  heroTexto: {
    paddingHorizontal: 22,
    paddingVertical: 25,
  },
  etiqueta: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFF2EC',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 12,
  },
  etiquetaTexto: {
    color: '#FF6B00',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  heroTitulo: {
    color: '#121212',
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 38,
  },
  heroDescricao: {
    color: '#666666',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 12,
  },
  acoes: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 18,
  },
  botaoPrincipal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#FF6B00',
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  botaoPrincipalTexto: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
  botaoSecundario: {
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 22,
    paddingHorizontal: 17,
    paddingVertical: 11,
    backgroundColor: '#FFFFFF',
  },
  botaoSecundarioTexto: {
    color: '#121212',
    fontSize: 12,
    fontWeight: '600',
  },
  beneficios: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 12,
    paddingVertical: 20,
    paddingHorizontal: 14,
  },
  beneficio: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  beneficioTexto: {
    color: '#4A5568',
    fontSize: 11,
    fontWeight: '700',
  },
  secao: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  secaoTitulo: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '800',
    color: '#121212',
  },
  secaoDescricao: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 18,
    marginTop: 6,
    marginBottom: 16,
  },
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  card: {
    width: '48%',
    flexGrow: 1,
    flexBasis: '45%',
    minHeight: 175,
    borderRadius: 14,
    padding: 14,
    justifyContent: 'space-between',
  },
  iconeCard: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  cardTitulo: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 18,
  },
  cardDescricao: {
    color: '#FFFFFF',
    fontSize: 11,
    lineHeight: 15,
    opacity: 0.9,
    marginTop: 6,
  },
  cardRodape: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  cardLink: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    paddingTop: 26,
    paddingHorizontal: 12,
  },
  footerTexto: {
    color: '#777777',
    fontSize: 11,
  },
});