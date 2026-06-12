import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '@/components/Header';
import { InfoCard } from '@/components/InfoCard';
import { Screen } from '@/components/Screen';
import { activityItems } from '@/data/mockScreens';
import { colors, radius } from '@/theme/colors';

const toneColor = {
  primary: colors.primary,
  success: colors.success,
  warning: colors.warning
};

export default function HomeScreen() {
  return (
    <Screen>
      <Header
        eyebrow="Hoje"
        title="Olá, Lucas"
        description="Este é o painel inicial mockado para a demonstração do Aidan no Android."
      />

      <View style={styles.summaryCard}>
        <View style={styles.summaryIcon}>
          <Ionicons name="sparkles-outline" size={28} color={colors.surface} />
        </View>
        <View style={styles.summaryText}>
          <Text style={styles.summaryTitle}>Demo pronta para navegar</Text>
          <Text style={styles.summaryDescription}>4 telas principais, fluxo inicial e detalhes simulados.</Text>
        </View>
      </View>

      <View style={styles.grid}>
        <Link href="/summary" asChild>
          <InfoCard title="Resumo" description="Veja o objetivo da apresentação e o estado atual." />
        </Link>
        <Link href="/(tabs)/assistant" asChild>
          <InfoCard title="Conversar" description="Abra a conversa mockada com o Aidan." />
        </Link>
      </View>

      <Text style={styles.sectionTitle}>Atividades mockadas</Text>
      <View style={styles.timeline}>
        {activityItems.map((item) => (
          <View key={item.id} style={styles.timelineItem}>
            <View style={[styles.dot, { backgroundColor: toneColor[item.tone] }]} />
            <View style={styles.timelineContent}>
              <View style={styles.timelineHeader}>
                <Text style={styles.timelineTitle}>{item.title}</Text>
                <Text style={styles.timelineTime}>{item.time}</Text>
              </View>
              <Text style={styles.timelineDescription}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: colors.primaryDark,
    borderRadius: radius.xl,
    padding: 20,
    marginBottom: 18
  },
  summaryIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)'
  },
  summaryText: {
    flex: 1,
    gap: 4
  },
  summaryTitle: {
    color: colors.surface,
    fontSize: 20,
    fontWeight: '900'
  },
  summaryDescription: {
    color: '#DDE2FF',
    fontSize: 14,
    lineHeight: 20
  },
  grid: {
    gap: 12,
    marginBottom: 26
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 14
  },
  timeline: {
    gap: 12
  },
  timelineItem: {
    flexDirection: 'row',
    gap: 12
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 8
  },
  timelineContent: {
    flex: 1,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: 16,
    gap: 6
  },
  timelineHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12
  },
  timelineTitle: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
    fontWeight: '800'
  },
  timelineTime: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700'
  },
  timelineDescription: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20
  }
});
