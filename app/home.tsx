import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BottomArea, Phone, PrimaryButton, SearchBox } from '@/components/AidanUI';

const logo = require('../assets/aidan-logo.png');

export default function HomeScreen() {
  return (
    <Phone bordered contentStyle={styles.phone}>
      <View style={styles.content}>
        <Pressable onPress={() => router.push('/menu')} style={styles.menuButton}>
          <Ionicons name="menu" size={30} color="#111111" />
        </Pressable>
        <View style={styles.brandRow}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.brandText}>O que vamos comprar hoje?</Text>
        </View>
        <SearchBox onPress={() => router.push('/shopping-list')} />
        <View style={styles.categories}>
          {['MERCADO', 'COMBUSTÍVEL', 'FARMÁCIA', 'LIVRARIA'].map((label) => <Pressable key={label} onPress={() => router.push('/shopping-list')} style={styles.category}><Text style={styles.categoryText}>{label}</Text></Pressable>)}
        </View>
        <PrimaryButton label="Escanear cupons\n▯▯▯" href="/shopping-list" style={styles.scanButton} />
      </View>
      <BottomArea active="home" />
    </Phone>
  );
}

const styles = StyleSheet.create({
  phone: { backgroundColor: '#FFFFFF' },
  content: { paddingHorizontal: 34, paddingTop: 34, paddingBottom: 115, flex: 1 },
  menuButton: { width: 40, height: 40, justifyContent: 'center', marginBottom: 48 },
  brandRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 34 },
  logo: { width: 76, height: 62, marginRight: 6 },
  brandText: { color: '#4B5CFF', fontSize: 15, flex: 1 },
  categories: { flexDirection: 'row', flexWrap: 'wrap', columnGap: 16, rowGap: 17, justifyContent: 'center', marginTop: 52, marginBottom: 83 },
  category: { width: 113, height: 42, borderRadius: 5, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.16, shadowRadius: 2, elevation: 2 },
  categoryText: { color: '#333333', fontSize: 14 },
  scanButton: { height: 113, width: 205, alignSelf: 'center', backgroundColor: '#5865F2' }
});
