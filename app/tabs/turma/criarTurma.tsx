import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity,
  Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import AuthHeader from '../../../components/Header/AuthHeader';

export default function CriarTurma() {
  const router = useRouter();
  const [nomeTurma, setNomeTurma] = useState('');
  const [descricao, setDescricao] = useState('');
  const [codigo, setCodigo] = useState('');

  const handleCriarTurma = () => {
    if (!nomeTurma || !descricao) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    // Gerar código se não fornecido
    const codigoTurma = codigo || Math.random().toString(36).substring(2, 8).toUpperCase();
    
    Alert.alert(
      'Turma Criada!', 
      `Turma "${nomeTurma}" criada com sucesso!\nCódigo: ${codigoTurma}`,
      [
        {
          text: 'OK',
          onPress: () => router.push('/tabs/comunidade')
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AuthHeader title="Criar Turma" subtitle="Configure sua nova turma" href="/" />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome da Turma *"
          placeholderTextColor="#666"
          value={nomeTurma}
          onChangeText={setNomeTurma}
        />
        
        <TextInput
          style={styles.inputMultiline}
          placeholder="Descrição da Turma *"
          placeholderTextColor="#666"
          value={descricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Código da Turma (opcional)"
          placeholderTextColor="#666"
          value={codigo}
          onChangeText={setCodigo}
          autoCapitalize="characters"
          maxLength={6}
        />

        <TouchableOpacity style={styles.button} onPress={handleCriarTurma}>
          <Text style={styles.buttonText}>Criar Turma</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          * Campos obrigatórios{'\n'}
          Se você não definir um código, um será gerado automaticamente.
        </Text>
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
  inputMultiline: {
    minHeight: 100,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    height: 50,
    backgroundColor: '#19486A',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});