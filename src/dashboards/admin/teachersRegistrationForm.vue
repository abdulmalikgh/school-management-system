<template>
    <v-content>
        <v-card width="700" class="mx-auto mt-5 p-5">
        <v-card-title>
            <h1 class="display-2"> Teacher Registration Form</h1>
        </v-card-title>
        <v-divider></v-divider>

        <card-text>
            <v-form>
                <v-text-field type="text"
                 label="First Name"
                 :rules=" [v => !!v || 'First name is required']" required/>
                <v-text-field type="text"
                 label="Middle Name" />
                <v-text-field type="text" 
                 label="Last Name" 
                 :rules=" [v => !!v || 'Last name is required']" required/>
                <v-text-field type="text"
                 label="Subject" 
                 :rules=" [v => !!v || 'Subject name is required']" required/>
                <v-text-field type="text"
                 label="Qualification" 
                 :rules=" [v => !!v || 'Qualification is required']" required/>
            </v-form>
            <v-card-action>
                <v-spacer></v-spacer>
                <v-btn color="success" right> Register </v-btn>
            </v-card-action>
        </card-text>
    </v-card>
    </v-content>
</template>
<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>

</style>