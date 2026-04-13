import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function CartScreen( {cart, setCart} ) {
    const total = cart.reduce ((sum,item) => sum + item.price, 0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi
carrito</Text>

            <FlatList
            data={cart}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={{ uri: item.image }} style={styles.image}/>

                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                    </View> 
            </View>
        
            )}
            
            ListEmptyComponent={
                <Text style={styles.emptyText}>Tu carrito esta vacio</Text>
            }
            contentContainerStyle={styles.listContainer}
            />
            <Text style={styles.total}>Total: ${total}</Text>

            <TouchableOpacity style ={styles.button} onPress ={() => setCart([])}>
                <Text style = {styles.buttonText}>Vaciar carrito</Text>
            </TouchableOpacity>

        </View>
    )}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: "#edf2f6",
        paddingHorizontal: 16,
        paddingTop: 60,
    },

    title: {
        fontSize: 28,
        fontWeight: "800",
        color: "#25303d",
        marginTop: 24,
        marginBottom: 18,
        textAlign: "center",
        backgroundColor: "#f6f9fb",
        paddingVertical: 14,
        borderRadius: 18,
        shadowColor: "#1e1e1e",
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderRadius: 22,
        marginBottom: 16,
        overflow: "hidden",
        elevation: 5,
        shadowColor: "#1e1e1e",
        shadowOpacity: 0.1,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 6 },
    },

    image:{
        width: 105,
        height: 105,
    },

    info: {
        padding: 16,
        justifyContent: "center",
    },

    name: {
        fontSize: 17,
        fontWeight: "700",
        color: "#25303d",
    },

    price:{
        fontSize: 15,
        color: "#6b7b8b",
        marginTop: 8,
        fontWeight: "600",
    },

    emptyText:{
        fontSize: 16,
        color: "#7c8a99",
        textAlign: "center",
        marginTop: 40,
    },

    listContainer:{
        paddingBottom: 20,
    }, 

    total:{
        fontSize: 22,
        fontWeight: "800",
        marginTop: 10,
        marginBottom: 16,
        color:"#25303d",
        textAlign: "right",
    },

    button:{
        backgroundColor: "#2d4a66",
        padding: 16,
        borderRadius: 30,
        alignItems: "center",
        marginTop: 10,
        shadowColor: "#1e1e1e",
        shadowOpacity: 0.18,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 7,
    },

    buttonText:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },
    
})