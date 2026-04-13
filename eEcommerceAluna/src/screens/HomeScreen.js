import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Image source={require("../../assets/logo.jpeg")} style={styles.logo} />

      <Text style={styles.storeName}> ALuna Joyería </Text>

      <Image
        source={{ uri: "https://i.pinimg.com/1200x/52/d8/34/52d8340ed93fafbe6d8cf10ed3359502.jpg" }}
        style={styles.banner}
      />

      <Text style={styles.sectionTitle}>Productos destacados</Text>
      <View style={styles.productsPreview}>
        <View style={styles.featuredProduct}>
          <Image
            source={{ uri: "https://i.pinimg.com/1200x/39/d1/9d/39d19da15b66d1dcee8a3456fbb687dc.jpg" }}
            style={styles.featuredImage}
          />
          <Text style={styles.productDescription}>
            Elegante reloj de oro con diseño moderno.
          </Text>
        </View>
        <View style={styles.featuredProduct}>
          <Image
            source={{ uri: "https://i.pinimg.com/736x/30/28/a0/3028a0864275918db7a74f4f1441617e.jpg" }}
            style={styles.featuredImage}
          />
          <Text style={styles.productDescription}>
            Anillo de promsesa de plata. 
          </Text>
        </View>
      </View>

      <Image
        source={{ uri: "https://i.pinimg.com/736x/14/16/22/14162290ff8955d5304aaaee644b79fe.jpg" }}
        style={styles.banner}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ProductList")}
      >
        <Text style={styles.buttonText}>Ver catálogo</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf2f6",
    paddingBottom: 20,
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 20,
    resizeMode: "contain",
  },

  storeName: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 12,
    color: "#25303d",
    letterSpacing: 1.2,
  },

  banner: {
    width: "92%",
    height: 190,
    alignSelf: "center",
    borderRadius: 24,
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginLeft: 20,
    marginTop: 30,
    color: "#25303d",
  },

  productsPreview: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },

  productCard: {
    width: 140,
    height: 150,
    backgroundColor: "#ffffff",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#1e1e1e",
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  featuredProduct: {
    width: 140,
    alignItems: "center",
    marginHorizontal: 10,
  },

  featuredImage: {
    width: 140,
    height: 120,
    borderRadius: 16,
    marginBottom: 10,
  },

  productDescription: {
    fontSize: 14,
    color: "#4d5e70",
    textAlign: "center",
    lineHeight: 18,
  },

  button: {
    backgroundColor: "#2d4a66",
    marginHorizontal: 22,
    marginTop: 30,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#1e1e1e",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 7,
  },

  cartButton: {
    marginTop: 14,
    backgroundColor: "#1c2b38",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
});