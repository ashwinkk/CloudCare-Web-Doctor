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
	}
};
