import { useEffect, useRef } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FloatingShapes, Phone } from '@/components/AidanUI';

export default function WelcomeScreen() {
  const cartTranslateX = useRef(new Animated.Value(-260)).current;
  const cartOpacity = useRef(new Animated.Value(0)).current;
  const cartScale = useRef(new Animated.Value(0.94)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(260),
      Animated.parallel([
        Animated.timing(cartOpacity, {
          toValue: 1,
          duration: 260,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true
        }),
        Animated.spring(cartTranslateX, {
          toValue: 0,
          friction: 7,
          tension: 52,
          useNativeDriver: true
        }),
        Animated.spring(cartScale, {
          toValue: 1,
          friction: 6,
          tension: 46,
          useNativeDriver: true
        })
      ])
    ]).start();
  }, [cartTranslateX, cartOpacity, cartScale]);

  return (
    <Phone backgroundColor="#45CFC5" bordered={false} contentStyle={styles.phone}>
      <Pressable style={styles.tapArea} onPress={() => router.replace('/home')}>
        <FloatingShapes />
        <Text style={styles.title}>BEM-VINDO AO{`\n`}AIDAN</Text>
        <Text style={styles.subtitle}>Economizar com inteligência{`\n`}começa agora</Text>
        <Animated.View
          style={[
            styles.cartArt,
            {
              opacity: cartOpacity,
              transform: [{ translateX: cartTranslateX }, { scale: cartScale }]
            }
          ]}
        >
          <View style={styles.handle} />
          <View style={styles.basket}>
            <View style={styles.billOne} />
            <View style={styles.billTwo} />
            <Ionicons name="cash" size={54} color="rgba(255,255,255,0.34)" style={styles.cashIcon} />
          </View>
          <View style={styles.baseLine} />
          <View style={styles.wheels}>
            <View style={styles.wheel} />
            <View style={styles.wheel} />
          </View>
        </Animated.View>
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
  cartArt: { width: 190, height: 170, alignSelf: 'center', marginTop: 93 },
  handle: { position: 'absolute', left: 5, top: 42, width: 45, height: 8, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.32)' },
  basket: { position: 'absolute', left: 45, top: 58, width: 118, height: 76, borderRadius: 9, backgroundColor: 'rgba(255,255,255,0.26)', overflow: 'hidden' },
  billOne: { position: 'absolute', left: 25, top: -10, width: 46, height: 54, borderRadius: 7, transform: [{ rotate: '-9deg' }], backgroundColor: 'rgba(255,255,255,0.20)' },
  billTwo: { position: 'absolute', left: 67, top: -5, width: 43, height: 52, borderRadius: 7, transform: [{ rotate: '13deg' }], backgroundColor: 'rgba(255,255,255,0.20)' },
  cashIcon: { position: 'absolute', left: 34, top: 18 },
  baseLine: { position: 'absolute', left: 55, top: 139, width: 115, height: 8, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.26)' },
  wheels: { position: 'absolute', left: 64, top: 150, right: 20, flexDirection: 'row', justifyContent: 'space-between' },
  wheel: { width: 22, height: 22, borderRadius: 11, backgroundColor: 'rgba(255,255,255,0.30)' },
  dots: { flexDirection: 'row', gap: 12, justifyContent: 'center', marginTop: 96 },
  dot: { width: 11, height: 11, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.30)' },
  dotActive: { width: 11, height: 11, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.50)' }
});
