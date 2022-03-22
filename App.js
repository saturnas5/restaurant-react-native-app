import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from "./src/Screens/SearchScreen";
import ResultShowScreen from "./src/Screens/ResultsShowScreen";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Search'>
                <Stack.Screen
                    name='Search'
                    component={SearchScreen}
                    options={{title: 'Buiseness Screen'}}
                />
                <Stack.Screen
                    name='Result'
                    component={ResultShowScreen}
                    options={{title: 'Buiseness Result'}}
                />
            </Stack.Navigator>
        </NavigationContainer>)
}

export default App;