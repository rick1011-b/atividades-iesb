import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Serie = ({ nome, ano, diretor, temporadas, capa }) => (
  <View style={styles.container}>
    <Image source={{ uri: capa }} style={styles.capa} />
    <Text style={styles.titulo}>{nome}</Text>
    <Text>{ano} | {temporadas} Temporadas</Text>
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

export default Serie;
