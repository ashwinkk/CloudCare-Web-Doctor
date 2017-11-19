<template>
    <div>
        <div v-if="bookingStatus == 'booking'">Confirming Your Booking. Please Wait</div>
        <div v-else-if="bookingStatus == 'success'">
            <h1>Booking Successful</h1>
            <h3>Your token no: {{this.bookingData.tokenno}}</h3>
            <p class="doctor-name">Doctor: {{this.bookingData.doctorName}}</p>
            <router-link to="/dashboard/my-appointments">Home</router-link>
        </div>
        <div v-else-if="bookingStatus == 'failed'">
            <h2>Booking Failed</h2>
            <router-link to="/dashboard/my-appointments">Home</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: "booking-status",
        computed: {
            bookingStatus: function(){
                return this.$store.getters.getBookingStatus;
            },
            bookingData: function(){
                return this.$store.getters.getBookedData;
            }
        },
        beforeDestroy(){
            this.$store.commit('clearBookingData');
        }
    }
</script>
<style>
    .doctor-name{
        font-size: 20px;
    }
</style>