import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [hasRequest, setHasRequest] = useState(false);

  const toggleAvailability = () => {
    setIsOnline(previousState => !previousState);
    if (hasRequest) {
        setHasRequest(false); // Cancel any active request if driver goes offline
    }
  };

  const triggerMockRequest = () => {
      if(isOnline) {
          Alert.alert("New Request!", "Accept incoming emergency trip?", [
              { text: "Later", onPress: () => console.log("Request ignored") },
              { text: "Accept", onPress: () => setHasRequest(true) }
          ]);
      }
  }

  // Determine styles and text based on status
  const statusColor = isOnline ? styles.onlineStatus : styles.offlineStatus;
  const statusText = isOnline ? 'ONLINE' : 'OFFLINE';
  const mainStatusText = isOnline 
    ? (hasRequest ? 'Trip Accepted! Navigating...' : 'Waiting for Request...') 
    : 'Go Online to Accept Requests';
  const mainStatusCardStyle = hasRequest ? styles.requestActiveCard : styles.mainStatusCard;


  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.driverName}>Driver: **Ravi Kumar**</Text>
          <Text style={styles.ambulanceId}>Ambulance ID: **A47B-GCS**</Text>
        </View>
        <TouchableOpacity onPress={() => Alert.alert('Profile', 'Navigating to Profile Screen...')}>
            <Text style={styles.profileLink}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Availability Toggle */}
      <View style={styles.statusPanel}>
        <Text style={[styles.statusText, statusColor]}>
          {statusText}
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#00FF00' }}
          thumbColor={'#FFF'} // Consistent thumb color
          onValueChange={toggleAvailability}
          value={isOnline}
        />
      </View>

      {/* Main Status */}
      <View style={mainStatusCardStyle}>
        <Text style={styles.mainStatusText}>
          {mainStatusText}
        </Text>
      </View>

      {/* Map Placeholder */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>[Map View of Driver's Location]</Text>
      </View>

      {/* Stats Bar */}
      <View style={styles.statsBar}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Trips Today</Text>
          <Text style={styles.statValue}>12</Text>
        </View>
        <View style={styles.statSeparator} />
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Priority Level</Text>
          <Text style={styles.statValueCritical}>5 (Highest)</Text>
        </View>
      </View>
      
      {/* Mock Incoming Request Button for testing */}
      {isOnline && !hasRequest && (
        <TouchableOpacity style={styles.mockRequestButton} onPress={triggerMockRequest}>
            <Text style={styles.mockRequestText}>Trigger Mock Request</Text>
        </TouchableOpacity>
      )}
      {hasRequest && (
        <TouchableOpacity style={styles.mockEndTripButton} onPress={() => setHasRequest(false)}>
            <Text style={styles.mockRequestText}>End Trip (Mock)</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

// Styles for the Dashboard (kept consistent with your CSS and JS file)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1C1C1C',
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  ambulanceId: {
    fontSize: 14,
    color: '#AAA',
  },
  profileLink: {
      color: '#00BFFF',
      fontSize: 16,
  },
  statusPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    padding: 15,
    margin: 20,
    borderRadius: 10,
  },
  statusText: {
    fontSize: 22,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  onlineStatus: {
      color: '#00FF00', // Vibrant Green
  },
  offlineStatus: {
      color: '#AAA', // Medium Grey when offline
  },
  mainStatusCard: {
    backgroundColor: '#2A0000', // Dark Red for urgency/alert status
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  requestActiveCard: {
    backgroundColor: '#00BFFF', // Blue background when on a trip
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  mainStatusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4444', // Red text (change for active request if needed)
    textAlign: 'center',
  },
  mapPlaceholder: {
    flex: 1,
    margin: 20,
    backgroundColor: '#222',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    color: '#777',
    fontSize: 16,
  },
  statsBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#1C1C1C',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#AAA',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  statValueCritical: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00BFFF', // Blue for high priority
  },
  statSeparator: {
    width: 1,
    backgroundColor: '#333',
    height: '100%',
  },
  mockRequestButton: {
      backgroundColor: '#00BFFF',
      padding: 10,
      margin: 20,
      borderRadius: 8,
      alignItems: 'center',
  },
  mockEndTripButton: {
      backgroundColor: '#00FF00', // Green for ending a trip
      padding: 10,
      margin: 20,
      borderRadius: 8,
      alignItems: 'center',
  },
  mockRequestText: {
      color: '#FFF',
      fontWeight: 'bold',
  }
});

export default DashboardScreen;