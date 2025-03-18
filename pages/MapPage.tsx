import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const initialRegion = {
  latitude: 21.0365, // UT Cancún
  longitude: -86.8466,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

const pueblosMagicos = [
  {
    id: "1",
    nombre: "Valladolid",
    descripcion: "Hermosa ciudad colonial con cenotes y cultura maya.",
    latitud: 20.6892,
    longitud: -88.2017,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Valladolid.jpg",
  },
  {
    id: "2",
    nombre: "Izamal",
    descripcion: "La ciudad amarilla, famosa por su convento y calles coloridas.",
    latitud: 20.9351,
    longitud: -89.0096,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Izamal_Yucat%C3%A1n.jpg",
  },
];

const MapPage = () => {
  const [region, setRegion] = useState(initialRegion);

  const moveToLocation = (lat, lon) => {
    setRegion({ ...region, latitude: lat, longitude: lon });
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={{ latitude: initialRegion.latitude, longitude: initialRegion.longitude }} title="UT Cancún" />
        {pueblosMagicos.map((pueblo) => (
          <Marker key={pueblo.id} coordinate={{ latitude: pueblo.latitud, longitude: pueblo.longitud }} title={pueblo.nombre} />
        ))}
      </MapView>

      <View style={styles.cardContainer}>
        <FlatList
          horizontal
          data={pueblosMagicos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.imagen }} style={styles.image} />
              <Text style={styles.title}>{item.nombre}</Text>
              <Text style={styles.description}>{item.descripcion}</Text>
              <TouchableOpacity onPress={() => moveToLocation(item.latitud, item.longitud)}>
                <Text style={styles.button}>Ver en el mapa</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  cardContainer: { position: "absolute", bottom: 20 },
  card: { backgroundColor: "white", margin: 10, padding: 10, borderRadius: 10, width: 180 },
  image: { width: "100%", height: 100, borderRadius: 10 },
  title: { fontWeight: "bold", fontSize: 16, marginTop: 5 },
  description: { fontSize: 12, marginVertical: 5 },
  button: { color: "blue", marginTop: 5, textAlign: "center" },
});

export default MapPage;
