import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { useRouter } from 'expo-router';
import AuthHeader from '../../../components/Header/AuthHeader';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.push('/tabs/comunidade');
  };

  const handleRegister = () => {
    router.push('/tabs/Registro');
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho azul unificado e ajustado */}
      <View style={styles.headerContainer}>
        <AuthHeader title="Entre na sua conta" subtitle="" href="/" />
      </View>

      {/* Inputs mais próximos ao cabeçalho */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      {/* Texto "Não tem conta?" e botão de cadastro */}
      <View style={styles.registerContainer}>
        <Text style={styles.infoText}>Não tem conta?</Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingVertical: 0,
  },
  formContainer: {
    marginTop: 2,
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    height: 50,
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  registerContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  registerText: {
    color: '#007AFF',
    fontSize: 16,
  },
});
