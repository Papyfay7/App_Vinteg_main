import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import SellScreen from "./SellScreen";
import ProfileScreen from "./ProfileScreen";
import SearchScreen from "./SearchScreen";
import InboxScreen from "./InboxScreen";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    const navigation = useNavigation();

    // Dummy data for the images/cards
    const data = [
        {
            id: "1",
            name: "Saccoche ",
            price: "10000 FCFA",
            image: require("../assets/produit1.jpg"),
            size: "M",
        },
        {
            id: "2",
            name: "Robe",
            price: "30000 FCFA",
            image: require("../assets/produit2.jpg"),
            size: "M",
        },
        {
            id: "3",
            name: "Montre",
            price: "25000 FCFA",
            image: require("../assets/produit3.jpg"),
            size: "M",
        },
    ];
    const [likes, setLikes] = useState(Array(data.length).fill(0));

    const handleLike = (index) => {
        const updatedLikes = [...likes];
        updatedLikes[index] += 1;
        setLikes(updatedLikes);
    };

    const handleCardPress = (item) => {
        navigation.navigate("ProductDetailScreen", { product: item });
    };

    const renderCard = ({ item, index }) => (
        <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.likeContainer}>
                        <TouchableOpacity
                            style={styles.likeButton}
                            onPress={() => handleLike(index)}
                        >
                            <Icon
                                name="favorite"
                                size={20}
                                color={likes[index] > 0 ? "red" : "#ccc"}
                            />
                        </TouchableOpacity>
                        <Text style={styles.likeCount}>{likes[index]}</Text>
                    </View>
                </View>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View>
                <View style={styles.searchBarContainer}>
                    <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
                    <TextInput style={styles.searchBar} placeholder="Rechercher" />
                </View>
                <FlatList
         data={[
    { name: "Vêtements", icon: "local-mall" },
    { name: "Chaussures", icon: "directions-walk" },
    { name: "Accessoires", icon: "shopping-bag" },
    { name: "Électronique", icon: "tv" },
    { name: "Maison et jardin", icon: "home" },
    { name: "Sport et plein air", icon: "directions-bike" },
    { name: "Beauté et santé", icon: "spa" },
    { name: "Livres et divertissement", icon: "book" },
    { name: "Auto et moto", icon: "directions-car" },
    { name: "Alimentation", icon: "restaurant" },
]}


                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.categoryItem}>
                            <Icon name={item.icon} size={19} color="black" style={styles.icon} />
                            <Text style={styles.categoryName}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoriesContainer}
                />
                <View style={styles.sectionContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Articles populaires</Text>
                        <TouchableOpacity style={styles.viewMoreButton2}>
                            <Text style={styles.viewMoreText2}>Voir plus</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={renderCard}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.flatListContainer}
                    />
                </View>
                <View style={styles.sectionContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Articles récents</Text>
                        <TouchableOpacity style={styles.viewMoreButton2}>
                            <Text style={styles.viewMoreText2}>Voir plus</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={renderCard}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.flatListContainer}
                    />
                </View>
            </View>
        </ScrollView>
    );
};
const App = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'orange',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    display: 'flex',
                },
            }}>

            <Tab.Screen
                name="Accueil"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Rechercher"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Vendre"
                component={SellScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="add-circle-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Message"
                component={InboxScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="message" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    searchBarContainer: {
        marginBottom: 10,
    },
    searchBar: {
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    flatListContainer: {
        paddingBottom: 0,
    },
    card: {
        marginHorizontal: 10,
        marginBottom: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        overflow: "hidden",
        width: 200,
    },
    image: {
        width: "100%",
        height: 150,
    },
    cardContent: {
        padding: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    price: {
        fontSize: 14,
        color: "orange",
        marginBottom: 10,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    likeContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    likeButton: {
        marginRight: 5,
    },
    likeCount: {
        marginLeft: 5,
    },
    header2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title2: {
        fontSize: 20,
        fontWeight: "bold",
    },
    viewMoreButton2: {
        padding: 5,
        borderRadius: 5,
    },
    viewMoreText2: {
        color: "orange",
        fontWeight: "bold",
    },
    categoryItem: {
        backgroundColor: "rgba(255,165,0,0.5)",
        padding: 10,
        marginRight: 10,
        borderRadius: 8,
        color: 'white',
        flexDirection: 'row', // Aligne les éléments horizontalement
        alignItems: 'center', // Centre verticalement les éléments
        marginRight: 10,
    },
    categoriesContainer: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
  searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginBottom: 15,
    },
    searchIcon: {
        marginRight: 10,

    },
    searchBar: {
        flex: 1,
        height: 40,
        color: '#333',
    }
});

export default App;
