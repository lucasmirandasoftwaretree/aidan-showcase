import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AndroidNavBar, Card, Field, Phone, PrimaryButton, TopBar } from '@/components/AidanUI';

export default function ProfileAddressScreen() {
  return (
    <Phone bordered contentStyle={styles.phone}>
      <TopBar title="Perfil" />
      <View style={styles.content}>
        <Text style={styles.title}>Endereço</Text>
        <View style={styles.fields}>
          <Field placeholder="Endereço e número" icon="search-outline" />
          <Field value="Usar localização atual\nR. Lauro Linhares – Trindade, Florianópolis – SC" icon="locate-outline" tint />
        </View>
        <Card style={styles.addressCard}>
          <Ionicons name="home" size={30} color="#8A76FF" style={styles.house} />
          <View style={styles.addressText}>
            <Text style={styles.addressTitle}>Endereço principal</Text>
            <Text style={styles.addressLine}>R. Lauro Linhares, 1775 – Trindade, Florianópolis – SC</Text>
            <Text style={styles.addressSmall}>Bloco Oeste, AP 401 – Condomínio Lauro Linhares</Text>
          </View>
          <Ionicons name="checkmark-circle-outline" size={22} color="#5D63FF" />
        </Card>
        <PrimaryButton label="Salvar alterações" href="/home" style={styles.button} />
      </View>
      <View style={styles.nav}><AndroidNavBar /></View>
    </Phone>
  );
}

const styles = StyleSheet.create({
  phone: { backgroundColor: '#FFFFFF' },
  content: { paddingHorizontal: 18, paddingTop: 26, paddingBottom: 60 },
  title: { color: '#333333', fontSize: 15, marginBottom: 18 },
  fields: { gap: 14, marginBottom: 31 },
  addressCard: { minHeight: 104, borderRadius: 11, borderWidth: 3, borderLeftColor: '#8D6BFF', borderRightColor: '#7FEFBF', borderTopColor: '#7FEFBF', borderBottomColor: '#8D6BFF', flexDirection: 'row', alignItems: 'center', padding: 14 },
  house: { marginRight: 12 },
  addressText: { flex: 1 },
  addressTitle: { color: '#333333', fontSize: 18, fontWeight: '800', textAlign: 'center', marginBottom: 7 },
  addressLine: { color: '#333333', fontSize: 12, lineHeight: 15 },
  addressSmall: { color: '#333333', fontSize: 11, lineHeight: 14 },
  button: { position: 'absolute', left: 20, right: 20, bottom: -181, backgroundColor: '#5865F2', height: 61 },
  nav: { position: 'absolute', left: 0, right: 0, bottom: 0 }
});
