import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleLogin = () => {
    // Stage 1: Send OTP
    if (!otpSent) {
      if (phoneNumber.length === 10) {
        // Mock sending OTP
        Alert.alert('Success', `OTP sent to ${phoneNumber}. Use 1234 for demo.`);
        setOtpSent(true);
      } else {
        Alert.alert('Error', 'Please enter a valid 10-digit phone number.');
      }
    // Stage 2: Verify & Login
    } else {
        // Simple mock OTP validation
        if (otp === '1234') { 
            // SUCCESSFUL LOGIN: NAVIGATE TO DASHBOARD
            navigation.navigate('Dashboard');
        } else {
            Alert.alert('Error', 'Invalid OTP. Please try again or re-send OTP.');
        }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logoText}>🚑 Green Corridor System</Text>
      <Text style={styles.tagline}>Saving minutes, saving lives.</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="e.g., 9876543210"
          placeholderTextColor="#777"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={10}
          editable={!otpSent} // Prevent editing phone after OTP is sent
        />

        {otpSent && (
          <>
            <Text style={styles.label}>Enter OTP</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="4-digit code"
              placeholderTextColor="#777"
              value={otp}
              onChangeText={setOtp}
              maxLength={4}
            />
            {/* Option to re-send or change number */}
            <TouchableOpacity onPress={() => setOtpSent(false)} style={{marginTop: 10}}>
                <Text style={styles.forgotPassword}>Change number / Resend OTP</Text>
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>{otpSent ? 'Verify & Login' : 'Send OTP'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'Please contact support to reset your password.')}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles remain the same, ensuring a proper dark theme
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    padding: 20,
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00FF00', 
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: '#AAA',
    textAlign: 'center',
    marginBottom: 40,
  },
  form: {
    width: '100%',
  },
  label: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#1C1C1C',
    color: '#FFF',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  loginButton: {
    backgroundColor: '#00BFFF', 
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#777',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
  },
});

export default LoginScreen;