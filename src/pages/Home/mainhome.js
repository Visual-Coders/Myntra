import { getAuth, signOut } from "firebase/auth"
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useEffect, useState } from "react";

function MainHome() {

	const auth = getAuth();
	const user = auth.currentUser;
	function signout() {
		signOut(auth).then(() => {
			alert("You have signed out successfully !!");
		}).catch((error) => {
			alert("There are some server issues !!");
		});
	}
	return (
		<div className="mainhome">
			<Header></Header>
			Hello {user.displayName}
			<button onClick={signout}>Logout</button>
			<Footer></Footer>
		</div>
	);
}

export default MainHome;