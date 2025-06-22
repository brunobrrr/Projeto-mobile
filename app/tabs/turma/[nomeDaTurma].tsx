import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import AuthHeader from '../../../components/Header/AuthHeader';

export default function TurmaDetalhes() {
  const { nomeDaTurma } = useLocalSearchParams();
  
  // Converter o nome da URL de volta para formato legível
  const nomeFormatado = typeof nomeDaTurma === 'string' 
    ? nomeDaTurma.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    : 'Turma';

  return (
    <ScrollView style={styles.container}>
      <AuthHeader 
        title={nomeFormatado} 
        subtitle="Detalhes da turma" 
        href="/tabs/comunidade" 
      />
      
      <View style={styles.content}>
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Informações da Turma</Text>
          <Text style={styles.infoText}>Nome: {nomeFormatado}</Text>
          <Text style={styles.infoText}>Alunos: 25</Text>
          <Text style={styles.infoText}>Professor: João Silva</Text>
          <Text style={styles.infoText}>Código: ABC123</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Atividades Recentes</Text>
          <Text style={styles.activityText}>• Nova tarefa: "Exercício 1"</Text>
          <Text style={styles.activityText}>• Entrega: "Projeto Final"</Text>
          <Text style={styles.activityText}>• Discussão: "Dúvidas Aula 5"</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Materiais</Text>
          <Text style={styles.activityText}>📁 Slides da Aula 1</Text>
          <Text style={styles.activityText}>📁 Exercícios</Text>
          <Text style={styles.activityText}>📁 Material Complementar</Text>
        </View>

        <Link href="/tabs/comunidade" style={styles.backButton}>
          <Text style={styles.backButtonText}>Voltar para Comunidade</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  content: {
    padding: 20,
  },
  infoCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#19486A',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  activityText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  backButton: {
    backgroundColor: '#19486A',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
