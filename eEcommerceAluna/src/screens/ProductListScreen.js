import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen({ navigation, favorites, setFavorites }) {
    const products = [
        {
            id: "1",
            name: "Collar Corazón Dorado de Oro.",
            price: 2399,
            image: "https://i.pinimg.com/736x/86/82/7f/86827ffded1e263bfb0dc04046b8ac2d.jpg",
            description: "Collar dorado con dije en forma de corazón, delicado y brillante, ideal para un look romántico y elegante."
        },
        {
            id: "2",
            name: "Aretes Minimalistas de Oro.",
            price: 979,
            image: "https://i.pinimg.com/736x/3d/39/b3/3d39b32e0f27d22a1651543208c58c49.jpg",
            description: "Aretes de diseño minimalista, ligeros y sofisticados, perfectos para combinar con cualquier outfit."
        },
        {
            id: "3",
            name: "Pulseras Elegantes de Oro.",
            price: 9229,
            image: "https://i.pinimg.com/736x/33/71/e2/3371e29b478d03479ade246bec33eaa1.jpg",
            description: "Conjunto de pulseras modernas con acabado fino, ideales para usar juntas o por separado."
        },
        {
            id: "4",
            name: "Anillo Fino de Maripososas de Plata.",
            price: 2319,
            image: "https://i.pinimg.com/736x/2a/39/ae/2a39ae4d80582fca51b0e00c20448e50.jpg",
            description: "Anillo elegante con detalles brillantes, perfecto para ocasiones especiales o para uso diario con estilo."
        },
        {
            id: "5",
            name: "Reloj de Oro con Diseño Moderno.",
            price: 2319,
            image: "https://i.pinimg.com/1200x/39/d1/9d/39d19da15b66d1dcee8a3456fbb687dc.jpg",
            description: "Reloj elegante con diseño moderno, perfecto para ocasiones especiales o para uso diario con estilo."
        },
        {
            id: "6",
            name: "Anillo de Promesa de Plata.",
            price: 1979,
            image: "https://i.pinimg.com/736x/30/28/a0/3028a0864275918db7a74f4f1441617e.jpg",
            description: "Anillo de promesa con diseño elegante, ideal para ocasiones especiales o para uso diario con estilo."
        },
        
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Catálogo de Productos</Text>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductCard 
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        description={item.description}   
                        navigation={navigation}
                        id={item.id}
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                )}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#edf2f6",
        paddingHorizontal: 16,
        paddingTop: 24,
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

    listContainer: {
        paddingBottom: 30,
    }
});