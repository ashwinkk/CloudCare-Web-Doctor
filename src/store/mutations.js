export default {
	registerUser(state, userObject) {
		var user = {};
		user.name = userObject.name;
		user.email = userObject.email;
		user.photoUrl = userObject.photoUrl;
		user.phoneNumber = userObject.phoneNumber;
		user.googleid = userObject.googleid;
		user.loggedIn = true;
		user.otp = "unverified";
		state.user = user;
		state.user.registerComplete = true;
	},
	updateOtpStatus(state, status) {
		state.user.otp = status;
	},
	updateDoctorSchedule(state, data) {
		console.log(data);
		state.doctor.schedule = data;
	},
	setBookingStatus(state, data) {
		console.log(data);
		if (data.tokenno != undefined) {
			state.booking.bookingStatus = "success";
			state.booking.tokenno = data.tokenno;
		} else state.booking.bookingStatus = "failed";
	},
	clearBookingData(state) {
		state.booking = {
			date: "",
			googleid: "",
			bookingStatus: "notbooked",
			tokenno: "",
			doctor: {}
		};
	},
	updateCurrentAppointmentList(state, data) {
		console.log(data);
		state.currentAppointments = data;
	},
	setDoctorId(state, doctorid) {
		console.log(doctorid);
		state.booking.doctorid = doctorid;
	},
	updatePreviousAppointments(state, data) {
		console.log(data);
		state.previousAppointments = data;
	}
};
