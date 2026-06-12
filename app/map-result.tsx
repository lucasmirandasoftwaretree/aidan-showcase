import { StyleSheet, View } from 'react-native';
import { BottomArea, FakeMap, Phone, SearchBox, TopBar } from '@/components/AidanUI';

export default function MapResultScreen() {
  return (
    <Phone bordered contentStyle={styles.phone}>
      <TopBar title="Mapa Interativo" />
      <View style={styles.search}><SearchBox /></View>
      <FakeMap withTooltip />
      <BottomArea active="home" />
    </Phone>
  );
}

const styles = StyleSheet.create({
  phone: { backgroundColor: '#FFFFFF' },
  search: { paddingHorizontal: 18, paddingTop: 31, paddingBottom: 28, zIndex: 2 }
});
