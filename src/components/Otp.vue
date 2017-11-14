<template>
    <div>
        <div>
            <input type="text" placeholder="Enter OTP here" v-model="otpVal" />
        </div>
        <div v-if="!loader">
            <div>
                <button class="button success" @click="verifyOtp">Submit</button>
            </div>
            <div>
                <button class="button success" @click="requestOtp">Request Again</button>
            </div>
        </div>
        <div v-else-if="otpStatus == 'verifying'">
            Loading..
        </div>
        <div v-else-if="otpStatus == 'failed'">
            Failed to verify OTP
            <div>
                <button class="button success" @click="requestOtp">Request Again</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        watch: {
            otpStatus: function(otpStatus){
                if(otpStatus == "success")
                    this.$router.push('dashboard/my-appointments');
            }
        },
        computed: {
            otpStatus: function(){
                return this.$store.getters.getVerificationStatus;
            },
            googleid: function(){
                return this.$store.getters.getGoogleId;
            },
            phoneNumber: function(){
                return this.$store.getters.getPhoneNumber;
            }
        },
        data(){
            return {
                otpVal: "",
                loader: false
            }
        },
        beforeMount(){
            this.requestOtp();
        },
        methods: {
            verifyOtp(){
                var data = {
                    otpno: this.otpVal,
                    googleid: this.googleid
                };
                this.loader = true;
                this.$store.dispatch("verifyOtp",data);
            },
            requestOtp(){
                var data = {
                    googleid: this.googleid,
                    mobilenumber: this.phoneNumber
                };
                this.$store.dispatch("prepareOtpVerification", data);
            }
        }
    }
</script>