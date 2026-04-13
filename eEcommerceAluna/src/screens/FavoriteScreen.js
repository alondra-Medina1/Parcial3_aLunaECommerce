import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function FavoriteScreen({ favorites, setFavorites }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis Favoritos</Text>

            <FlatList
                data={favorites}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.image} />

                        <View style={styles.info}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => setFavorites(favorites.filter(fav => fav.id !== item.id))}
                        >
                            <Text style={styles.removeButtonText}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No tienes productos favoritos</Text>
                }
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edf2f6",
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: "#25303d",
        textAlign: "center",
        marginBottom: 18,
        backgroundColor: "#f1f5f8",
        paddingVertical: 12,
        borderRadius: 18,
        letterSpacing: 0.3,
        overflow: "hidden",
        shadowColor: "#1e1e1e",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderRadius: 18,
        padding: 16,
        marginBottom: 16,
        alignItems: "center",
        shadowColor: "#1e1e1e",
        shadowOpacity: 0.08,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 6 },
        elevation: 7,
    },
    image: {
        width: 82,
        height: 82,
        borderRadius: 16,
        marginRight: 16,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: "700",
        color: "#25303d",
    },
    price: {
        fontSize: 15,
        color: "#6b7b8b",
        marginTop: 6,
    },
    removeButton: {
        backgroundColor: "#25303d",
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 16,
    },
    removeButtonText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "700",
    },
    emptyText: {
        textAlign: "center",
        fontSize: 18,
        color: "#6b7b8b",
        marginTop: 50,
    },
    listContainer: {
        paddingBottom: 20,
    },
});