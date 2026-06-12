import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FloatingShapes, Phone } from '@/components/AidanUI';

export default function WelcomeScreen() {
  return (
    <Phone backgroundColor="#45CFC5" bordered={false} contentStyle={styles.phone}>
      <Pressable style={styles.tapArea} onPress={() => router.replace('/home')}>
        <FloatingShapes />
        <Text style={styles.title}>BEM-VINDO AO{`\n`}AIDAN</Text>
        <Text style={styles.subtitle}>Economizar com inteligência{`\n`}começa agora</Text>
        <View style={styles.cartArt}>
          <Ionicons name="cart" size={155} color="rgba(255,255,255,0.30)" />
          <Ionicons name="cash" size={56} color="rgba(255,255,255,0.28)" style={styles.cash} />
        </View>
        <View style={styles.dots}><View style={styles.dot}/><View style={styles.dot}/><View style={styles.dotActive}/></View>
      </Pressable>
    </Phone>
  );
}

const styles = StyleSheet.create({
  phone: { backgroundColor: '#48CFC5' },
  tapArea: { flex: 1, paddingHorizontal: 38, paddingTop: 70, backgroundColor: '#48CFC5' },
  title: { color: '#FFFFFF', textAlign: 'center', fontSize: 24, lineHeight: 39, fontWeight: '900', marginBottom: 40 },
  subtitle: { color: '#FFFFFF', textAlign: 'center', fontSize: 16, lineHeight: 23, fontWeight: '600' },
  cartArt: { alignItems: 'center', justifyContent: 'center', marginTop: 95 },
  cash: { position: 'absolute', top: 42 },
  dots: { flexDirection: 'row', gap: 12, justifyContent: 'center', marginTop: 115 },
  dot: { width: 11, height: 11, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.30)' },
  dotActive: { width: 11, height: 11, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.50)' }
});
