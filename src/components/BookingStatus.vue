<template>
    <div>
        <div v-if="bookingStatus == 'booking'">Confirming Your Booking. Please Wait</div>
        <div v-else-if="bookingStatus == 'success'">
            <p>Booking Successful</p>
            <p>Your token no: {{this.bookingData.tokenno}}</p>
            <p>Doctor: {{this.bookingData.doctorName}}</p>
        </div>
        <div v-else-if="bookingStatus == 'failed'">
            Booking Failed
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
        data(){
            return {
            }
        }
    }
</script>