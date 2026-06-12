import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AidanLogo, BluePhone, Field, PrimaryButton } from '@/components/AidanUI';

export default function LocationScreen() {
  return (
    <BluePhone>
      <View style={styles.logo}><AidanLogo size={108} /></View>
      <Text style={styles.title}>LOCALIZAÇÃO</Text>
      <View style={styles.fields}>
        <Field placeholder="Endereço e número" icon="search-outline" />
        <Field value="Usar localização atual\nR. Lauro Linhares – Trindade, Florianópolis – SC" icon="locate-outline" />
      </View>
      <View style={styles.pin}><Ionicons name="location-outline" size={28} color="#0B1D32" /></View>
      <Text style={styles.text}>Para oferecer ofertas personalizadas e localizar os melhores preços próximos a você, o AIDAN precisará acessar sua localização e tratar seus dados com segurança. Ao continuar, você concorda com os <Text style={styles.link}>Termos LGPD</Text>. Você pode revogar o consentimento a qualquer momento.</Text>
      <PrimaryButton label="Continuar" href="/location-map" />
    </BluePhone>
  );
}

const styles = StyleSheet.create({
  logo: { alignItems: 'center', marginTop: 0, marginBottom: 35 },
  title: { color: '#FFFFFF', fontSize: 17, fontWeight: '600', marginBottom: 28 },
  fields: { gap: 13, marginBottom: 20 },
  pin: { alignItems: 'center', marginBottom: 17 },
  text: { color: '#FFFFFF', fontSize: 9.5, lineHeight: 13, textAlign: 'justify', fontWeight: '600', marginBottom: 30 },
  link: { textDecorationLine: 'underline', fontWeight: '900' }
});
