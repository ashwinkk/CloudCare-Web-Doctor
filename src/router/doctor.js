import DoctorHome from "../doctor/DoctorHome";
import ChatRooms from "../doctor/ChatRooms";

const doctor = [
	{
		path: "/doctor",
		component: DoctorHome,
		children: [
			{
				path: "chat-rooms",
				name: "Doctor-Chat",
				component: ChatRooms
			}
		]
	}
];

export default doctor;
