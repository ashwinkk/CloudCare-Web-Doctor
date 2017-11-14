<template>
    <div>
        <div>
            <input type="text" placeholder="Enter OTP here" v-model="otpVal" />
        </div>
        <div>
            <button class="button success" @click="verifyOtp">Submit</button>
        </div>
    </div>
</template>
<script>
    export default {
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
                otpVal: ""
            }
        },
        beforeMount(){
            var data = {
                googleid: this.googleid,
                mobilenumber: "9746919337"
            };
            this.$store.dispatch("prepareOtpVerification", data);
        },
        methods: {
            verifyOtp(){
                var data = {
                    otpno: this.otpVal,
                    googleid: this.googleid
                };
                this.$store.dispatch("verifyOtp",data);
            }
        }
    }
</script>