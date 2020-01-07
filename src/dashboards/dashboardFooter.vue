<template>
    <v-footer padless dark app inset>
        <v-card class="flex" flat tile color="black" :elevation="10">
            <v-card-text class="py-2 white-text text-center">
               <span> &copy;</span> {{new Date().getFullYear() }} - <strong> ST. JAMES SHS </strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>