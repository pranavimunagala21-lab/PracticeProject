import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
// Mock Map View import
// import MapView from 'react-native-maps';

const NavigationScreen = ({ navigation }) => {
  const nextSignal = {
    distance: '200m',
    status: 'Will turn GREEN',
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Traffic Alert Banner */}
      <View style={styles.alertBanner}>
        <Text style={styles.alertText}>🚨 Traffic Density Alert: High volume near Central Plaza.</Text>
      </View>

      {/* Map Placeholder */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>[Real-time Map with Route Highlighted and Signal Markers]</Text>
      </View>

      {/* Next Signal Status */}
      <View style={styles.signalStatusCard}>
        <Text style={styles.signalLabel}>Next Signal in: {nextSignal.distance}</Text>
        <Text style={styles.signalStatusGreen}>
          → **{nextSignal.status}**
        </Text>
      </View>

      {/* Bottom Panel - Navigation Info */}
      <View style={styles.bottomPanel}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Distance to Patient</Text>
          <Text style={styles.infoValue}>1.8 km</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Estimated Time of Arrival</Text>
          <Text style={styles.infoValueETA}>4 min</Text>
        </View>

        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => navigation.navigate('PickupConfirmation')} // Page 6
        >
          <Text style={styles.buttonText}>Start Pickup (Arrived at Location)</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  alertBanner: {
    backgroundColor: '#FF8C00', // Orange/Amber for warning
    padding: 10,
    alignItems: 'center',
  },
  alertText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    color: '#777',
    fontSize: 16,
    textAlign: 'center',
  },
  signalStatusCard: {
    backgroundColor: '#052A05', // Dark background for the green status
    padding: 15,
    marginHorizontal: 10,
    marginTop: -20, // Overlap slightly on the map
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#00FF00',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signalLabel: {
    color: '#FFF',
    fontSize: 16,
  },
  signalStatusGreen: {
    fontSize: 18,
    fontWeight: '900',
    color: '#00FF00', // Vibrant Green
  },
  bottomPanel: {
    backgroundColor: '#1C1C1C',
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    color: '#AAA',
    fontSize: 16,
  },
  infoValue: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoValueETA: {
    color: '#00BFFF', // Bright Blue for ETA
    fontSize: 20,
    fontWeight: '900',
  },
  actionButton: {
    backgroundColor: '#00BFFF', // Bright Blue
    padding: 18,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NavigationScreen;