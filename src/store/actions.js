export default {
	register(context, userObject) {
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(userObject)
		};
		console.log(userObject);
		fetch(
			"http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com/patientDetails",
			options
		)
			.then(response => response.text())
			.then(data => {
				context.commit("registerUser", userObject);
				console.log(data);
			})
			.catch(err => console.log(err));
	},
	prepareOtpVerification(context, data) {
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "applicatin/json"
			},
			body: JSON.stringify(data)
		};
		console.log(data);
		fetch(
			"http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com/mobileVerification",
			options
		)
			.then(response => response.text)
			.then(data => console.log(data))
			.catch(err => console.log(err));
	},
	verifyOtp(context, data) {
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "applicatin/json"
			},
			body: JSON.stringify(data)
		};
		fetch(
			"http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com/verify",
			options
		)
			.then(response => response.text)
			.then(data => console.log(data))
			.catch(err => console.log(err));
	}
};
