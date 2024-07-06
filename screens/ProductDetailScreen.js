import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from "react-native";

const ProductDetailScreen = ({ route, navigation }) => {
  const {
    name,
    price,
    image,
    size,
    seller,
    reviews,
    condition,
    description,
  } = route.params.product;

  const handleBuyPress = () => {
    // Naviguer vers InboxScreen et envoyer les détails de la publication
    navigation.navigate('InboxScreen', { productDetails: route.params.product });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.exampleText}>
          Example text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet ligula vel dolor luctus, ut fermentum enim aliquam. Sed ullamcorper enim ut arcu gravida placerat.
        </Text>
        <View style={styles.propertyContainer}>
          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>Seller:</Text>
            <Text style={styles.propertyValue}>{seller}</Text>
          </View>
          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>Condition:</Text>
            <Text style={styles.propertyValue}>{condition}</Text>
          </View>
          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>Size:</Text>
            <Text style={styles.propertyValue}>{size}</Text>
          </View>
          <View style={styles.propertyRow}>
            <Text style={styles.propertyLabel}>Reviews:</Text>
            <Text style={styles.reviews}>{reviews} Reviews</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.offerButton}>
            <Text style={styles.buttonText}>Make an offer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyButton} onPress={handleBuyPress}>
            <Text style={styles.buttonText}>Buy now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
  },
  detailsContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: "orange",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  exampleText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  propertyContainer: {},
  propertyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  propertyLabel: {
    fontWeight: "bold",
    color: "#666",
    width: 80,
  },
  propertyValue: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  reviews: {
    fontSize: 16,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  offerButton: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  buyButton: {
    backgroundColor: "orange",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ProductDetailScreen;
