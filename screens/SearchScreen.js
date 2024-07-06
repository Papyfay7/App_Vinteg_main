import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importez l'icône FontAwesome (ou une autre bibliothèque)

const Stack = createStackNavigator();

const SearchScreen = ({ navigation }) => {
  const categories = [
    { name: 'Électronique', icon: 'tv' },
    { name: 'Maison et jardin', icon: 'home' },
    { name: 'Beauté et santé', icon: 'heart' },
    { name: 'Livres et divertissement', icon: 'book' },
    { name: 'Auto et moto', icon: 'car' },
  ];

  return (
    <View style={styles.container}>
      {/* Barre de recherche */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Rechercher"
        />
      </View>

      {/* Liste des catégories */}
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Icon name={item.icon} size={20} color="black" style={styles.icon} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false} // Masque la barre de défilement vertical
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor:"white",
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
    color:"orange",
  },
  input: {
    flex: 1,
    height: 40,
  },
  categoriesContainer: {
    flex: 1, // Ajuste la hauteur pour remplir l'espace vertical disponible
    borderBottomColor:"red",
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10, // Espacement entre les catégories
    borderRadius: 8,
  },
  icon: {
    marginRight: 5,
    color:"orange",
  },
  categoryText: {
    fontSize: 16,
  },
});

export default SearchScreen;
