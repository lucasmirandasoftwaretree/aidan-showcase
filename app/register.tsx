import { StyleSheet, Text, View } from 'react-native';
import { AidanLogo, BluePhone, Field, PrimaryButton } from '@/components/AidanUI';

export default function RegisterScreen() {
  return (
    <BluePhone>
      <View style={styles.logo}><AidanLogo size={118} /></View>
      <Text style={styles.title}>CADASTRE-SE</Text>
      <View style={styles.form}>
        <Field placeholder="Nome Completo" />
        <Field placeholder="Nome de Usuário" />
        <Field placeholder="Número do celular ou email" />
        <Field placeholder="Senha" />
        <Field placeholder="Confirmar Senha" />
      </View>
      <Text style={styles.terms}>Ao continuar, você concorda com os <Text style={styles.link}>Termos de Uso</Text> e está ciente da <Text style={styles.link}>Declaração de Privacidade</Text></Text>
      <PrimaryButton label="Continuar" href="/verify-code" />
    </BluePhone>
  );
}

const styles = StyleSheet.create({
  logo: { alignItems: 'center', marginTop: 5, marginBottom: 35 },
  title: { color: '#FFFFFF', fontSize: 23, fontWeight: '900', textAlign: 'center', marginBottom: 50 },
  form: { gap: 11, marginBottom: 31 },
  terms: { color: '#FFFFFF', fontSize: 9.5, lineHeight: 12.5, fontWeight: '600', marginBottom: 9 },
  link: { textDecorationLine: 'underline', fontWeight: '900' }
});
