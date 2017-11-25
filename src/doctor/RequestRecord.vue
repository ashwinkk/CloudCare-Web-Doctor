<template>
    <div>
        <h1 class="title">Request a Medical Record</h1>
        <div>
            <label for="adhar">Adhar Card Number</label>
            <input type="adhar no" v-model="adharno" />
        </div>
        <div>
            <button @click="requestRecord" class="button care-stack-button">Request</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: "request-record",
        computed: {
            doctorMail: function() {
                return this.$store.getters.getDoctorEmail;
            },
            doctorName: function(){
                return this.$store.getters.getDoctorName;
            }
        },
        data(){
            return {
                adharno: ""
            }
        },
        methods: {
            requestRecord() {
                var data = {
                    email: this.doctorMail,
                    name: this.doctorName,
                    aadharid: this.adharno
                }
                this.$store.dispatch("requestRecord",data);
            }
        }
    }
</script>