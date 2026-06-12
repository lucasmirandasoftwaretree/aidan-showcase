import { useEffect, useRef } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { FloatingShapes, Phone } from '@/components/AidanUI';

export default function WelcomeScreen() {
  const cartTranslateX = useRef(new Animated.Value(-280)).current;
  const cartOpacity = useRef(new Animated.Value(0)).current;
  const cartScale = useRef(new Animated.Value(0.96)).current;

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
          tension: 54,
          useNativeDriver: true
        }),
        Animated.spring(cartScale, {
          toValue: 1,
          friction: 6,
          tension: 48,
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
          <View style={styles.cartHandle} />
          <View style={styles.cartBackBill} />
          <View style={styles.cartMidBill} />
          <View style={styles.cartFrontBill} />

          <View style={styles.cartBody}>
            <View style={styles.cartLeftEdge} />
            <View style={styles.cartTopEdge} />
            <View style={styles.cartRightEdge} />
            <View style={styles.cartBottomEdge} />

            <Text style={styles.moneySymbol}>$</Text>
            <View style={styles.chartBarOne} />
            <View style={styles.chartBarTwo} />
            <View style={styles.chartBarThree} />
          </View>

          <View style={styles.cartBase} />
          <View style={styles.cartWheelRow}>
            <View style={styles.cartWheel} />
            <View style={styles.cartWheel} />
          </View>
        </Animated.View>

        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dotActive} />
        </View>
      </Pressable>
    </Phone>
  );
}

const cartStroke = 'rgba(173, 220, 255, 0.96)';
const cartFill = 'rgba(173, 220, 255, 0.22)';
const cartFillSoft = 'rgba(173, 220, 255, 0.16)';

const styles = StyleSheet.create({
  phone: { backgroundColor: '#48CFC5' },
  tapArea: { flex: 1, paddingHorizontal: 38, paddingTop: 70, backgroundColor: '#48CFC5' },
  title: { color: '#FFFFFF', textAlign: 'center', fontSize: 24, lineHeight: 39, fontWeight: '900', marginBottom: 40 },
  subtitle: { color: '#FFFFFF', textAlign: 'center', fontSize: 16, lineHeight: 23, fontWeight: '600' },
  cartArt: { width: 230, height: 205, alignSelf: 'center', marginTop: 82 },
  cartHandle: {
    position: 'absolute',
    left: 8,
    top: 28,
    width: 40,
    height: 8,
    borderRadius: 10,
    backgroundColor: cartStroke,
    opacity: 0.72
  },
  cartBackBill: {
    position: 'absolute',
    left: 101,
    top: 43,
    width: 48,
    height: 56,
    borderRadius: 8,
    backgroundColor: cartFillSoft,
    transform: [{ rotate: '-14deg' }]
  },
  cartMidBill: {
    position: 'absolute',
    left: 137,
    top: 38,
    width: 52,
    height: 62,
    borderRadius: 8,
    backgroundColor: cartFillSoft,
    transform: [{ rotate: '15deg' }]
  },
  cartFrontBill: {
    position: 'absolute',
    left: 72,
    top: 52,
    width: 118,
    height: 82,
    borderRadius: 12,
    backgroundColor: cartFill
  },
  cartBody: {
    position: 'absolute',
    left: 45,
    top: 61,
    width: 156,
    height: 101
  },
  cartLeftEdge: {
    position: 'absolute',
    left: 0,
    top: 8,
    width: 7,
    height: 84,
    borderRadius: 5,
    backgroundColor: cartStroke,
    transform: [{ rotate: '10deg' }]
  },
  cartTopEdge: {
    position: 'absolute',
    left: 10,
    top: 0,
    width: 112,
    height: 7,
    borderRadius: 5,
    backgroundColor: cartStroke
  },
  cartRightEdge: {
    position: 'absolute',
    right: 12,
    top: 6,
    width: 7,
    height: 82,
    borderRadius: 5,
    backgroundColor: cartStroke,
    transform: [{ rotate: '12deg' }]
  },
  cartBottomEdge: {
    position: 'absolute',
    left: 20,
    bottom: 6,
    width: 112,
    height: 8,
    borderRadius: 5,
    backgroundColor: cartStroke
  },
  moneySymbol: {
    position: 'absolute',
    left: 62,
    top: 17,
    color: cartStroke,
    fontSize: 52,
    fontWeight: '900',
    opacity: 0.95
  },
  chartBarOne: {
    position: 'absolute',
    right: 39,
    bottom: 20,
    width: 12,
    height: 19,
    borderRadius: 3,
    backgroundColor: cartStroke
  },
  chartBarTwo: {
    position: 'absolute',
    right: 23,
    bottom: 20,
    width: 12,
    height: 30,
    borderRadius: 3,
    backgroundColor: cartStroke
  },
  chartBarThree: {
    position: 'absolute',
    right: 7,
    bottom: 20,
    width: 12,
    height: 42,
    borderRadius: 3,
    backgroundColor: cartStroke
  },
  cartBase: {
    position: 'absolute',
    left: 58,
    top: 164,
    width: 118,
    height: 8,
    borderRadius: 6,
    backgroundColor: cartStroke
  },
  cartWheelRow: {
    position: 'absolute',
    left: 70,
    right: 56,
    top: 176,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cartWheel: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: cartStroke
  },
  dots: { flexDirection: 'row', gap: 12, justifyContent: 'center', marginTop: 70 },
  dot: { width: 11, height: 11, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.30)' },
  dotActive: { width: 11, height: 11, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.50)' }
});
