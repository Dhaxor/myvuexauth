<template>
  <div class="home">
 
 <div>
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Email</label>
     <input required v-model="email" type="email" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
 </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import Hello from '@/components/Hello.vue'

export default {
  name: 'Login',
  // components: {
  //   Hello
  // }
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods:{
    login(){
      let email = this.email
      let password = this.password
      this.$store.dispatch('login',{email,password})
      .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
    }
  }
}
</script>
