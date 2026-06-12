import { StyleSheet, View } from 'react-native';
import { BottomArea, FakeMap, Phone, SearchBox, TopBar } from '@/components/AidanUI';
import { router } from 'expo-router';

export default function MapScreen() {
  return (
    <Phone bordered contentStyle={styles.phone}>
      <TopBar title="Mapa Interativo" />
      <View style={styles.search}><SearchBox onPress={() => router.push('/map-search')} /></View>
      <FakeMap />
      <BottomArea active="home" />
    </Phone>
  );
}

const styles = StyleSheet.create({
  phone: { backgroundColor: '#FFFFFF' },
  search: { paddingHorizontal: 22, paddingTop: 32, paddingBottom: 28, zIndex: 2 }
});
