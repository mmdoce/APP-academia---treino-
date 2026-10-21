import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

type Props = {
  active: 'home' | 'about' | 'contact';
};

export default function AppToolbar({ active }: Props) {
  const router = useRouter();

  function openContact() {
    router.push('/contact');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.brand}
        onPress={() => router.replace('/home')}
        activeOpacity={0.7}
      >
        <Ionicons name="fitness" size={22} color="#FF6B00" />
        <Text style={styles.logo}>FitNoQueue</Text>
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.links}
      >
        <TouchableOpacity
          style={[styles.link, active === 'home' && styles.activeLink]}
          onPress={() => router.replace('/home')}
        >
          <Text
            style={[
              styles.linkText,
              active === 'home' && styles.activeText,
            ]}
          >
            Início
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.link, active === 'about' && styles.activeLink]}
          onPress={() => router.push('/about')}
        >
          <Text
            style={[
              styles.linkText,
              active === 'about' && styles.activeText,
            ]}
          >
            Sobre Nós
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.link, active === 'contact' && styles.activeLink]}
          onPress={openContact}
        >
          <Text
            style={[
              styles.linkText,
              active === 'contact' && styles.activeText,
            ]}
          >
            Contato
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 64,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    gap: 12,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  logo: {
    fontSize: 18,
    fontWeight: '800',
    color: '#121212',
    letterSpacing: -0.3,
  },
  links: {
    alignItems: 'center',
    gap: 4,
  },
  link: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeLink: {
    borderBottomColor: '#FF6B00',
  },
  linkText: {
    fontSize: 12,
    color: '#666666',
    fontWeight: '500',
  },
  activeText: {
    color: '#FF6B00',
    fontWeight: '800',
  },
});