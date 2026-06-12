import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BottomArea, DaraAvatar, IconLine, Phone, PrimaryButton, SearchBox } from '@/components/AidanUI';

const logo = require('../assets/aidan-logo.png');

function HomeDimmed() {
  return (
    <View style={styles.homeUnderlay}>
      <View style={styles.fakeContent}>
        <Ionicons name="menu" size={30} color="#111111" />
        <View style={styles.brandRow}><Image source={logo} style={styles.logo} resizeMode="contain" /><Text style={styles.brandText}>O que vamos comprar hoje?</Text></View>
        <SearchBox />
        <View style={styles.categories}>{['MERCADO', 'COMBUSTÍVEL', 'FARMÁCIA', 'LIVRARIA'].map((label) => <View key={label} style={styles.category}><Text style={styles.categoryText}>{label}</Text></View>)}</View>
        <PrimaryButton label="Escanear cupons\n▯▯▯" disabled style={styles.scanButton} />
      </View>
      <BottomArea active="home" />
    </View>
  );
}

export default function MenuScreen() {
  return (
    <Phone bordered contentStyle={styles.phone}>
      <HomeDimmed />
      <Pressable style={styles.closeLayer} onPress={() => router.push('/home')} />
      <View style={styles.drawer}>
        <View style={styles.drawerHeader}>
          <Text style={styles.menuTitle}>Menu</Text>
          <Ionicons name="notifications-outline" size={24} color="#4B5CFF" />
        </View>
        <View style={styles.profileRow}>
          <DaraAvatar size={38} />
          <View><Text style={styles.name}>Dara Vitória</Text><Text style={styles.type}>Pessoal</Text></View>
        </View>
        <View style={styles.lines}>
          <IconLine icon="person-outline" text="Perfil" href="/profile" />
          <IconLine icon="bicycle-outline" text="Ganhe comprando ou entregando" href="/earn" />
          <IconLine icon="map-outline" text="Mapa interativo" href="/map" />
          <IconLine icon="people-outline" text="Comunidade" href="/community" />
          <IconLine icon="settings-outline" text="Configurações" href="/settings" />
          <IconLine icon="log-out-outline" text="Sair" href="/" />
        </View>
      </View>
    </Phone>
  );
}

const styles = StyleSheet.create({
  phone: { backgroundColor: '#FFFFFF', position: 'relative' },
  homeUnderlay: { flex: 1, opacity: 0.34, backgroundColor: '#FFFFFF' },
  fakeContent: { paddingHorizontal: 34, paddingTop: 34, paddingBottom: 115, flex: 1 },
  brandRow: { flexDirection: 'row', alignItems: 'center', marginTop: 48, marginBottom: 34 },
  logo: { width: 76, height: 62, marginRight: 6 },
  brandText: { color: '#4B5CFF', fontSize: 15, flex: 1 },
  categories: { flexDirection: 'row', flexWrap: 'wrap', columnGap: 16, rowGap: 17, justifyContent: 'center', marginTop: 52, marginBottom: 83 },
  category: { width: 113, height: 42, borderRadius: 5, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.16, shadowRadius: 2, elevation: 2 },
  categoryText: { color: '#333333', fontSize: 14 },
  scanButton: { height: 113, width: 205, alignSelf: 'center', backgroundColor: '#5865F2' },
  closeLayer: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.12)' },
  drawer: { position: 'absolute', left: 0, top: 0, width: 260, height: 382, backgroundColor: '#FFFFFF', borderBottomRightRadius: 17, paddingTop: 19, paddingHorizontal: 30 },
  drawerHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 19 },
  menuTitle: { color: '#333333', fontSize: 16, fontWeight: '900' },
  profileRow: { flexDirection: 'row', alignItems: 'center', gap: 13, marginBottom: 18 },
  name: { color: '#333333', fontSize: 14, fontWeight: '500' },
  type: { color: '#777777', fontSize: 12 },
  lines: { gap: 0 }
});
