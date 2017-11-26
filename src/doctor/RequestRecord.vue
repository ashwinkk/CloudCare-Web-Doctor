<template>
    <div>
        <h1 class="title">Request a Medical Record</h1>
        <div v-if="!hideRequest">
            <div>
                <label for="adhar">Adhar Card Number</label>
                <input type="adhar no" v-model="adharno" />
            </div>
            <div>
                <button @click="requestRecord" class="button care-stack-button">Request</button>
            </div>
        </div>
        <div v-else-if="recordLink.url!=undefined">
            <div>
                <a target="_blank" class="button care-hack-button" :href="`${host}${recordLink.url}?email=${doctorMail}`">View Record</a>
            </div>
        </div>
        {{recordLink}}
    </div>
</template>
<script>
    import fapp from '../firebase/index';

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
        firebase: {
            recordLink: null
        },
        created(){
            this.baseRef = this.db.ref();
            this.$bindAsObject('recordLink', this.baseRef.child(`links/${this.doctorMail.split('@')[0]}`));
        },
        data(){
            return {
                adharno: "",
                hideRequest: false,
                db: fapp.database(),
                host: "http://20.20.4.84:3000"
            }
        },
        methods: {
            requestRecord() {
                var data = {
                    email: this.doctorMail,
                    name: this.doctorName,
                    aadharid: this.adharno,
                    reqtype: 0
                }
                this.$store.dispatch("requestRecord",data);
                this.hideRequest = true;
            }
        }
    }
</script>