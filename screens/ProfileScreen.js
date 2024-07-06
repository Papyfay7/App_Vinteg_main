import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userInfoContainer}>
        <Image source={require('../assets/produit3.jpg')} style={styles.profilePic} />
        <View style={styles.userDetails}>
          <Text style={styles.username}>JohnDoe123</Text>
          <View style={styles.viewProfileContainer}>
            <Text style={styles.viewProfileText}>Voir profile</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.sectionContainer}>
          <MaterialIcons name="favorite" size={24} color="blue" style={styles.icon} />
          <Text style={styles.sectionTitle}>Article favori</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.sectionContainer}>
          <MaterialIcons name="palette" size={24} color="green" style={styles.icon} />
          <Text style={styles.sectionTitle}>Personalisation</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.sectionContainer}>
          <MaterialIcons name="store" size={24} color="orange" style={styles.icon} />
          <Text style={styles.sectionTitle}>Mes articles en vente</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.sectionContainer}>
          <MaterialIcons name="shopping-cart" size={24} color="purple" style={styles.icon} />
          <Text style={styles.sectionTitle}>Mes achats récents</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.sectionContainer}>
          <MaterialIcons name="forum" size={24} color="brown" style={styles.icon} />
          <Text style={styles.sectionTitle}>Forums</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.sectionContainer}>
          <MaterialIcons name="settings" size={24} color="red" style={styles.icon} />
          <Text style={styles.sectionTitle}>Paramétres</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.sectionContainer}>
          <MaterialIcons name="info" size={24} color="black" style={styles.icon} />
          <Text style={styles.sectionTitle}>À propos de Vinteg</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToLogin} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 60,
    marginRight: 20,
  },
  userDetails: {
    flex: 1,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderTopColor: '#ccc',
    paddingTop: 20,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  viewProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewProfileText: {
    fontSize: 16,
    color: '#333',
    marginRight: 5,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ECE5DD', // Couleur caractéristique de WhatsApp
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  logoutButton: {
    backgroundColor: 'orange', // Couleur bleue caractéristique de Facebook
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

});


export default ProfileScreen;
