import DoctorHome from "../doctor/DoctorHome";
import ChatRooms from "../doctor/ChatRooms";
import RequestRecord from "../doctor/RequestRecord";
import DoctorLogin from "../doctor/DoctorLogin";
import DoctorSignUp from "../doctor/DoctorSignUp";
import SubmitDiagnosis from "../doctor/SubmitDiagnosis";
import Search from "../doctor/Search";

const doctor = [
	{
		path: "/doctor-signin",
		component: DoctorLogin,
		name: "DoctorLogin"
	},
	{
		path: "/doctor-signup",
		component: DoctorSignUp,
		name: "DoctorLogin"
	},
	{
		path: "/doctor",
		component: DoctorHome,
		children: [
			{
				path: "chat-rooms/",
				name: "Doctor-Chat-Home",
				component: ChatRooms
			},
			{
				path: "chat-rooms/:id",
				name: "Doctor-Chat",
				component: ChatRooms
			},
			{
				path: "request",
				name: "Request",
				component: RequestRecord
			},
			{
				path: "submit-diagnosis",
				name: "Submit",
				component: SubmitDiagnosis
			},
			{
				path: "search",
				name: "Search",
				component: Search
			}
		]
	}
];

export default doctor;
