// Import the screens
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import LiveView from './components/LiveView';
// Import React Navigation
import { createStackNavigator } from 'react-navigation'

// Create the navigator
const navigator = createStackNavigator({
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount },
  LiveView: { screen: LiveView },
});

// Export it as the root component
export default navigator
