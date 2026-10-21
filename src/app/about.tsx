import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppToolbar from '../components/AppToobarl';

export default function AboutScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" background-Color="#F8F9FA" />

      <AppToolbar active="about" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* APRESENTAÇÃO */}
        <View style={styles.hero}>
          <View style={styles.heroText}>
            <Text style={styles.eyebrow}>
              SOBRE A ACADEMIA
            </Text>

            <Text style={styles.title}>
              Sua rotina de treino sem filas e sem interrupções
            </Text>

            <Text style={styles.description}>
              Revolucionamos a forma de treinar. Criamos um ecossistema 
              com fluxo inteligente para você focar 100% no seu desempenho, 
              sem perder tempo esperando aparelhos.
            </Text>

            <View style={styles.pill}>
              <Text style={styles.pillText}>
                Tecnologia & Exclusividade
              </Text>
            </View>
          </View>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
            }}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        {/* MISSÃO */}
        <View style={styles.mission}>
          <Text style={styles.sectionLabel}>NOSSA MISSÃO</Text>

          <Text style={styles.sectionTitle}>
            Respeitar o seu tempo e maximizar seus resultados
          </Text>

          <Text style={styles.bodyText}>
            Acreditamos que cada minuto do seu treino é valioso. Eliminamos 
            as filas e o revezamento incômodo para entregar uma experiência 
            fluida, confortável e de alta performance.
          </Text>
        </View>

        {/* FUNDADORES */}
        <View style={styles.team}>
          <Text style={styles.sectionLabel}>
            NOSSA EQUIPE
          </Text>

          <Text style={styles.sectionTitle}>
            Especialistas no seu desenvolvimento
          </Text>

          <Text style={styles.bodyText}>
            Profissionais dedicados a garantir o melhor ambiente, orientação 
            técnica e tecnologia para sua evolução constante.
          </Text>

          <View style={styles.founders}>
            <View style={styles.founderCard}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
                }}
                style={styles.founderImage}
                resizeMode="cover"
              />

              <Text style={styles.founderName}>
                Carla Mendes
              </Text>

              <Text style={styles.founderRole}>
                Head de Treinamento
              </Text>
            </View>

            <View style={styles.founderCard}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
                }}
                style={styles.founderImage}
                resizeMode="cover"
              />

              <Text style={styles.founderName}>
                Lucas Silva
              </Text>

              <Text style={styles.founderRole}>
                Coordenador de Performance
              </Text>
            </View>
          </View>
        </View>

        {/* VALORES */}
        <View style={styles.values}>
          <Text style={styles.sectionLabel}>
            NO QUE ACREDITAMOS
          </Text>

          <Text style={styles.sectionTitle}>
            Pilares da nossa estrutura
          </Text>

          <View style={styles.valueCard}>
            <Text style={styles.valueTitle}>
              MISSÃO
            </Text>
            <Text style={styles.bodyText}>
              Garantir equipamentos livres e ambiente otimizado para o seu treino render do início ao fim.
            </Text>
          </View>

          <View style={styles.valueCard}>
            <Text style={styles.valueTitle}>
              VISÃO
            </Text>
            <Text style={styles.bodyText}>
              Ser referência em academias de alto padrão que priorizam a eficiência e o tempo do aluno.
            </Text>
          </View>

          <View style={styles.valueCard}>
            <Text style={styles.valueTitle}>
              VALORES
            </Text>
            <Text style={styles.bodyText}>
              Exclusividade, inovação tecnológica, foco em resultados e respeito ao ritmo de cada atleta.
            </Text>
          </View>
        </View>

        {/* RODAPÉ */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Academia Exclusiva · Treine sem revesar. · Versão: 1.0
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    paddingBottom: 30,
  },
  hero: {
    padding: 22,
    backgroundColor: '#121212',
  },
  heroText: {
    marginBottom: 22,
  },
  eyebrow: {
    color: '#FF6B00',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  description: {
    fontSize: 13,
    lineHeight: 20,
    color: '#CCCCCC',
    marginTop: 12,
  },
  pill: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 107, 0, 0.15)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#FF6B00',
  },
  pillText: {
    fontSize: 11,
    color: '#FF6B00',
    fontWeight: '700',
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 14,
    backgroundColor: '#1E1E1E',
  },
  mission: {
    paddingHorizontal: 22,
    paddingVertical: 30,
  },
  sectionLabel: {
    fontSize: 10,
    color: '#FF6B00',
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#121212',
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '800',
    marginBottom: 10,
  },
  bodyText: {
    color: '#666666',
    fontSize: 13,
    lineHeight: 20,
  },
  team: {
    padding: 22,
    backgroundColor: '#FFFFFF',
  },
  founders: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  founderCard: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  founderImage: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    backgroundColor: '#E2E8F0',
  },
  founderName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#121212',
    marginTop: 10,
  },
  founderRole: {
    fontSize: 11,
    color: '#FF6B00',
    fontWeight: '700',
    marginTop: 2,
  },
  values: {
    padding: 22,
    gap: 12,
  },
  valueCard: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  valueTitle: {
    color: '#121212',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 6,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#121212',
    marginTop: 10,
  },
  footerText: {
    fontSize: 11,
    color: '#888888',
  },
});