import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function ProductDetailScreen({ route, navigation, cart, setCart, favorites, setFavorites }) {
    const { name, price, image, description } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: image }}
                style={styles.image}
            />

            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>

                <Text style={styles.price}>${price}</Text>

                <Text style={styles.description}>
                    {description}
                </Text>

                <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    const newProduct = {name, price, image};
                    setCart([...cart, newProduct]);
                    alert("Producto agregado al carrito");
                }}
                >
                    <Text style={styles.buttonText}>Agregar al carrito</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={[styles.button, styles.favoriteButton]}
                onPress={() => {
                    const product = { id: name, name, price, image };
                    const isFavorite = favorites.some(fav => fav.id === product.id);
                    if (isFavorite) {
                        setFavorites(favorites.filter(fav => fav.id !== product.id));
                        alert("Producto removido de favoritos");
                    } else {
                        setFavorites([...favorites, product]);
                        alert("Producto agregado a favoritos");
                    }
                }}
                >
                    <Text style={styles.buttonText}>
                        {favorites.some(fav => fav.id === name) ? "Remover de Favoritos" : "Agregar a Favoritos"}
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edf2f6",
    },

    image: {
        width: "100%",
        height: 260,
        resizeMode: "cover",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    infoContainer: {
        padding: 24,
        backgroundColor: "#ffffff",
        marginTop: -35,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: "#1e1e1e",
        shadowOpacity: 0.1,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8,
    },

    name: {
        fontSize: 30,
        fontWeight: "800",
        color: "#25303d",
        textAlign: "center",
        marginBottom: 12,
    },

    price: {
        fontSize: 26,
        color: "#4d6a84",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 18,
    },

    description: {
        fontSize: 16,
        color: "#4d5e70",
        textAlign: "justify",
        lineHeight: 26,
        backgroundColor: "#f6f9fb",
        padding: 18,
        borderRadius: 18,
    },

    button: {
        backgroundColor: "#2d4a66",
        padding: 16,
        borderRadius: 16,
        marginTop: 22,
        alignItems: "center",
        shadowColor: "#1e1e1e",
        shadowOpacity: 0.18,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 7,
    },

    favoriteButton: {
        backgroundColor: "#2d4a66",
    },

    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "700",
    },
});


 