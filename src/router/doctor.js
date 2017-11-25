import DoctorHome from "../doctor/DoctorHome";
import ChatRooms from "../doctor/ChatRooms";
import RequestRecord from "../doctor/RequestRecord.vue";
import DoctorLogin from "../doctor/DoctorLogin.vue";
import DoctorSignUp from "../doctor/DoctorSignUp.vue";

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
			}
		]
	}
];

export default doctor;
