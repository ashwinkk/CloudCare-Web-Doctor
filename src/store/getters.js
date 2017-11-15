export default {
	isActionComplete(state) {
		return state.user.registerComplete;
	},
	getGoogleId(state) {
		return state.user.googleid;
	},
	getPhoneNumber(state) {
		return state.user.phoneNumber;
	},
	getVerificationStatus(state) {
		return state.user.otp;
	},
	isDoctorListEmpty(state) {
		return state.doctor.schedule.length == 0;
	},
	getDoctorSchedule(state) {
		return state.doctor.schedule;
	},
	getBookedData(state) {
		return state.booking;
	},
	getBookingStatus(state) {
		return state.booking.bookingStatus;
	},
	getCurrentAppointmentList(state) {
		return state.currentAppointments;
	},
	getPreviousAppointments(state) {
		return state.previousAppointments;
	}
};
