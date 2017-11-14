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
				console.log(data);
				context.commit("registerUser", userObject);
			})
			.catch(err => console.log(err));
	},
	prepareOtpVerification(context, data) {
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
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
		context.commit("updateOtpStatus", "verifying");
	},
	verifyOtp(context, data) {
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		};
		fetch(
			"http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com/verify",
			options
		)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				var status = data.verified ? "success" : "failed";
				console.log("status", status);
				context.commit("updateOtpStatus", status);
			})
			.catch(err => console.log(err));
	},
	fetchDoctorSchedule(context) {
		fetch(
			"http://ec2-13-58-90-106.us-east-2.compute.amazonaws.com/doctorDetails"
		)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				context.commit("updateDoctorSchedule", data);
			});
	}
};
