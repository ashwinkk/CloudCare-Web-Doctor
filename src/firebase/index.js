import Firebase from "firebase";

var config = {
	apiKey: "AIzaSyBpdWt_k8iCOafpvjtuDNWEpkZlCbujxeQ",
	authDomain: "carestack-771d7.firebaseapp.com",
	databaseURL: "https://carestack-771d7.firebaseio.com",
	projectId: "carestack-771d7",
	storageBucket: "carestack-771d7.appspot.com",
	messagingSenderId: "403579118721"
};

var fapp = Firebase.initializeApp(config);
export default fapp;
