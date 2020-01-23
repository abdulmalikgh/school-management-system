<template>
    <nav>
        <v-app-bar color="black" dark app>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title class="text-uppercase">
                    <span class="font-weight-light">Saint James </span>
                    <span> Senior High School </span>
                </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn text @click="logout">
                        <span>Exit</span>
                        <v-icon right>exit_to_app</v-icon>
                    </v-btn>
                
            </v-app-bar>
            <v-navigation-drawer v-model="drawer"  dark app class="dark darken-4"> 
                <v-layout column align-center>
                   <v-flex class="mt-5">
                      <v-avatar>
                          <v-img src="../assets/admin.png"></v-img>
                      </v-avatar>
                       <p class="white--text subheading mt-1 text-center">Admin</p>
                   </v-flex>
                </v-layout>
                <v-list flat>
                    <v-list-item v-for="link in links" :key="link.text" router :to='link.route' active-class="border">
                       <v-list-item-action>
                           <v-icon>{{link.icon}}</v-icon>
                       </v-list-item-action>
                           <v-list-item-content>
                               <v-list-item>
                                   {{link.text}}
                              </v-list-item> 
                           </v-list-item-content>
                    </v-list-item>
                </v-list>   
            </v-navigation-drawer>
    </nav>
</template>
<script>
export default {

    data(){
       return{
        drawer: true, 
        links:[
            {icon:'dashboard',text:'DashBoard', route:'/admin'},
            {icon:'person', text:'students',route:'/students'},
            {icon: 'person', text:'teachers',route:'/teachers'}
        ]
       }
    },
    methods:{
        logout() {
            this.$store.dispatch('logout')
            .then(()=>{
                this.$router.push('/adminLogin')
            })
        }
    }
}
</script>
<style scoped>
 .border {
     border-left: 4px solid #0ba518;
 }
</style>