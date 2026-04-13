import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/logo.jpeg")}
                style={styles.image}
            />

            <Text style={styles.name}>Bienvenido Alo</Text>
            <Text style={styles.email}>alo@correo.com</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#bfcbd5",
        justifyContent:"center",
        alignItems: "center",
        padding: 20,
    },

    image: {
        width: 180,
        height: 180,
        borderRadius: 90,
        marginBottom: 20,
        resizeMode: "contain",
        alignSelf: 'center',
    },

    name: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#1e1e1e",
        letterSpacing: 1,
    },

    email: {
        fontSize: 16,
        color: "#72838b",
        marginTop: 8,
    },
})