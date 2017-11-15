<template>
    <div>
        <div>
            <h1>Book Appointment</h1>
        </div>
        <div>
            <div class="doctor-select-container">
                <h2>Select Doctor</h2>
                <div class="grid-x">
                    <div 
                        class="small-4 cell doctor-style" 
                        :class="{'active-doctor': doctor.doctorid == selectedData.doctorid}"
                        v-for="doctor in doctors" 
                        v-on:click="selectDoctor(doctor)"
                    >
                        <h3>{{doctor.name}}</h3>
                        <p>{{doctor.department}}</p>
                    </div>
                </div>
            </div>
            <div class="grid-x date-container">
                    <label for="select-date">Select Date</label>
                    <select class="small-4 medium-3 large-3 cell select-date" id="select-date" v-model="selectedData.date">
                        <option disabled>-Select Date-</option>
                        <option 
                            v-for="date in choosableDates" 
                            v-bind:value="`${date.date}${date.monthIndex}${date.year}`"
                            >
                            {{date.day}}, {{date.date}} {{date.month}}
                        </option>
                    </select>
            </div>
        </div>
        <div>
            <div>
                <button 
                    class="button" 
                    @click="()=>{ confirmBooking();showCredentialInputs=false; }"
                    >
                    Book for self
                </button>
                <button 
                    class="button" 
                    @click="showCredentialInputs = true"
                    >
                    Book for someone
                </button>
            </div>
            <div v-if="showCredentialInputs">
                <div>
                    <input type="text" placeholder="Name" v-model="selectedData.credentials.name" />
                </div>
                <div>
                    <input type="text" placeholder="Contact Number of patient" v-model="selectedData.credentials.contactNumber" />
                </div>
                <div>
                    <input type="text" placeholder="Relation with patient" v-model="selectedData.credentials.relation" />
                </div>
                <div>
                    <button class="button" @click="confirmBooking">Confirm Booking</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            doctors: function(){
                return this.$store.getters.getDoctorSchedule;
            },
            selectedData: function(){
                return this.$store.getters.getBookedData;
            }
        },
        data(){
            return {
                allDates: [],
                showCredentialInputs: false,
                choosableDates: [],
                days: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
            }
        },
        created(){
            this.setDates();
        },
        beforeMount(){
            if(this.$store.getters.isDoctorListEmpty)
                this.$store.dispatch("fetchDoctorSchedule");
            else if(this.selectedData.doctorid!=""){
                var doctor = this.doctors.find((element)=>{
                    return element.doctorid == this.selectedData.doctorid;
                });
                this.selectDoctor(doctor);
            }

        },
        methods: {
            setDates(){
                var date = new Date();
                var i,day = date.getDate();
                for(i=0;i<7;++i){
                    date.setDate(day+i);
                    this.allDates.push({
                        date: date.getDate(),
                        month: this.months[date.getMonth()],
                        day: this.days[date.getDay()],
                        year: date.getFullYear(),
                        monthIndex: date.getMonth()
                    });
                }
            },
            selectDoctor(clickedDoctor){
                this.selectedData.doctorid = clickedDoctor.doctorid;
                this.selectedData.doctorName = clickedDoctor.name;
                console.log(this.selectedData);
                this.choosableDates = this.allDates.filter((date)=>{
                    if(clickedDoctor.available.find((availableDate)=>availableDate.days==date.day))
                        return true;
                    return false;
                })
            },
            confirmBooking(){
                console.log("confirming booking");
                var bookingData = Object.assign(this.selectedData);
                bookingData.googleid = this.$store.getters.getGoogleId;
                this.$store.dispatch("confirmBooking", bookingData);
                this.$router.push("/dashboard/booking-status");
            }
        }
    }
</script>

<style>
    button.button{
        border-radius: 2px;
    }
    div.active-doctor{
        border: 2px solid #b9b9e7;
        background: #c0d3e9;
    }
    .doctor-style{
        cursor: pointer;
        border-radius: 3px;
        padding: 10px;
        border: 2px solid transparent;
    }
    .doctor-style:hover{
        border: 2px solid #b9b9e7;
    }
    .date-container{
        text-align: center;
        display: block;
    }
    .doctor-select-container{
        padding: 15px;
    }
    .select-date{
        border-radius: 3px;
    }
</style>