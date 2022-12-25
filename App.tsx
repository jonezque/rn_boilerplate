import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {ThemeProvider, createTheme} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Tab.Navigator initialRouteName="Details">
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Overview'}}
            />
            <Tab.Screen name="Details" component={DetailsScreen} />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default App;
