<template>
    <div>
        <div>
            <label for="speciality">Speciality</label>
            <input id="speciality" v-model="speciality" placeholder="speciality" />
        </div>
        <div>
            <label for="yos">Years of Service</label>
            <input id="yos" v-model="yearsOfService" type="number" placeholder="Years Of Service" />
        </div>
        <div>
            <label for="hospital">Hospital</label>
            <input id="hospital" v-model="hospital" placeholder="hospital" />
        </div>
        <button @click="completeSignIn" class="button care-stack-button">Submit</button>
    </div>
</template>
<script>    
    export default {
        name: "doctor-sign-up",
        data(){
            return {
                yearsOfService: "",
                speciality: "",
                hospital: ""
            }
        },
        watch: {
            isSignedIn: function(status){
                if(status == true)
                    this.$router.push('/doctor/chat-rooms');
            }
        },
        computed: {
            isSignedIn: function(){
                this.$store.getters.getSignUpCompleteStatus;
            }
        },
        methods: {
            completeSignIn(){
                var name = localStorage.getItem('doctor-name');
                // var localStorage.getItem('doctor-dp');
                var email = localStorage.getItem('doctor-email');
                var googleId = localStorage.getItem('doctor-googleid');
                var data = {
                    yos: this.yearsOfService,
                    speciality: this.speciality,
                    hospital: this.hospital,
                    email,
                    googleId,
                    name
                };
                this.$store.dispatch('completeSignUp',data);
            }
        }
    }
</script>