import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountMenu from './components/AccountMenu';
import Grid from '@mui/material/Grid';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink
} from "react-router-dom";

//pages
import Home from './pages/Home'
import Todo from './pages/Todo'

export default function App() {
	return (
		<Router>
			<Container>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2} sx={{ my: 1 }}>
						<Grid item xs={8}>
							<Box>
								<NavLink className='text-link' to="/">
									<Typography variant="h4" component="h1" gutterBottom>
										React Skills Test
									</Typography>
								</NavLink>
							</Box>
						</Grid>
						<Grid item xs={4}>
							<AccountMenu />
						</Grid>
						<Grid item xs={12}>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/todo" element={<Todo />} />
							</Routes>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Router>
	);
}
