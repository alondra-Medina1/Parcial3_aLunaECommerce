import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProductCard({ name, price, image, description, navigation, id, favorites, setFavorites }) {
    const isFavorite = favorites.some(fav => fav.id === id);

    const toggleFavorite = () => {
        const product = { id, name, price, image };
        if (isFavorite) {
            setFavorites(favorites.filter(fav => fav.id !== id));
        } else {
            setFavorites([...favorites, product]);
        }
    };

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity
                style={styles.card}
                onPress={() =>
                    navigation.navigate("ProductDetail", {
                        name: name,
                        price: price,
                        image: image,
                        description,
                    })
                }
            >
                <Image source={{ uri: image }} style={styles.image} />

                <View style={styles.infoContainer}>
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.productPrice}>${price}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
                <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color={isFavorite ? "#ff4444" : "#666"} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        position: "relative",
        marginBottom: 22,
    },

    card: {
        backgroundColor: "#ffffff",
        borderRadius: 24,
        overflow: "hidden",
        elevation: 6,
        shadowColor: "#1e1e1e",
        shadowOpacity: 0.12,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
    },

    image: {
        width: "100%",
        height: 190,
        resizeMode: "cover",
    },

    infoContainer: {
        padding: 18,
        backgroundColor: "#f6f9fb",
    },

    productName: {
        fontSize: 18,
        fontWeight: "800",
        color: "#25303d",
    },

    productPrice: {
        fontSize: 16,
        color: "#6b7b8b",
        marginTop: 8,
        fontWeight: "700",
    },

    favoriteButton: {
        position: "absolute",
        top: 14,
        right: 14,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderRadius: 24,
        padding: 8,
        shadowColor: "#1e1e1e",
        shadowOpacity: 0.12,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
    },
});