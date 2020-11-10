import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import  {AuthProvider}  from './Auth';

function App() {
	return (
		<AuthProvider>
			<Router>
				<div className="App">
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="signup/" component={SignUp} />
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
