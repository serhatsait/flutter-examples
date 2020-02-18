import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Ekran2 from './Ekran2';

const AppNavigator = createStackNavigator({
    Home: {screen: Home},
    Ekran2: {screen: Ekran2}
});

const App = createAppContainer(AppNavigator);

export default App;
