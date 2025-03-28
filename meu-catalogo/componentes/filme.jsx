import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Filme = ({ nome, ano, diretor, tipo, capa }) => (
  <View style={styles.container}>
    <Image source={{ uri: capa }} style={styles.capa} />
    <Text style={styles.titulo}>{nome}</Text>
    <Text>{ano} | {tipo}</Text>
    <Text>Diretor: {diretor}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    width: 200,
  },
  capa: {
    width: 150,
    height: 225,
    borderRadius: 5,
  },
  titulo: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default Filme;
