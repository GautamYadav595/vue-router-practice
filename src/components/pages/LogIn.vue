<!-- <template>
   <div>
    
    
    <div class="bg-purple-600 text-white text-center py-20 h-[200px]">
      <h2 class="text-3xl font-bold">Login Page</h2>
    </div>

 
    <div class="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-md">
      <form @submit.prevent="handleLogin">
        <label class="block font-semibold text-gray-700">Username</label>
        <input 
          type="text" 
          v-model="username" 
          placeholder="Enter your username"
          class="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          required 
        />

        <label class="block font-semibold text-gray-700 mt-4">Password</label>
        <input 
          type="password" 
          v-model="password" 
          placeholder="Enter your password"
          class="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          required 
        />

        <button 
          type="submit" 
          class="mt-6 bg-white text-blue-500 font-semibold px-6 py-2 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white transition">
          Login
        </button>
      </form>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>
  <script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            username: '',
            password: '',
            successMessage: '',
            errorMessage: ''
        };
    },
    actions(){
      reset( this.successMessage = "")
    },
    methods: {
        ...mapActions(['login']),
        async handleLogin() {
    const response = await this.login({ username: this.username, password: this.password });

    if (response.success) {
        this.successMessage = 'Login successful!';
        this.errorMessage = '';

        
        setTimeout(() => {
            this.$router.push('/user'); 
        }, 1000);
    } else {
        this.errorMessage = response.message || 'Invalid credentials';
        this.successMessage = '';
    }
}
    }
};
</script>

<style scoped>
.login-container {
    text-align: center;
    margin-top: 50px;
}

.success {
    color: green;
    font-weight: bold;
}

.error {
    color: red;
    font-weight: bold;
}
</style> -->
<template>
  <div class="flex justify-center items-center h-screen bg-[rgba(245,242,235,1)] gap-[80px]">
 
    <div class="bg-white p-0 rounded-[30px] shadow-lg w-[480px] h-[540px] flex flex-col items-center ">
      <div class="w-[376px] flex flex-col items-center">
        
        <div class="w-[265px] h-[123px] flex justify-center flex-col items-center justify-center mt-10">
          <div class="w-[105px] h-[53px]">
          <h2 class="text-2xl font-bold  text-center">Sign In</h2>
          </div>
          <div class="w-[265px] h-[58px]">
          <h5 class=" text-gray-700 text-center">Hey, Enter your details to login to your account</h5>
          </div>
        </div>


        
        <form @submit.prevent="handleLogin" class="flex flex-col w-full">
          <input 
            type="text" 
            v-model="username" 
            placeholder="Username" 
            required 
            class="border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input 
            type="password" 
            v-model="password" 
            placeholder="Password" 
            required 
            class="border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p class="text-xs text-black mb-4">Don’t have an account yet? <bold class="font-bold">Register now!</bold></p>

          
          <div class=" flex justify-center w-[376px]">
            <button 
              type="submit" 
              class="w-[375px] bg-[rgba(174,214,179,1)] text-white font-semibold py-2 rounded-[8px] mt-5"
            >
              Sign In
            </button>
          </div>
        </form>

        <div class="flex items-center my-4">
        <div class="border-b flex-1"></div>
        <p class="mx-3 text-black ">-- Or Sign in with --</p>
        <div class="border-b flex-1"></div>
        </div>
        <div class="flex w-[376px] h-[40px] gap-2">

  <button class="flex items-center justify-center w-[120px] h-[40px] border border-gray-300 rounded-full hover:bg-gray-100 transition">
    <i class="fa-brands fa-google text-lg mr-2"></i>
    Google
  </button>


  <button class="flex items-center justify-center w-[120px] h-[40px] border border-gray-300 rounded-full hover:bg-gray-100 transition">
    <i class="fa-brands fa-facebook text-lg mr-2"></i>
    Facebook
  </button>

  
  <button class="flex items-center justify-center w-[120px] h-[40px] border border-gray-300 rounded-full hover:bg-gray-100 transition">
    <i class="fa-brands fa-apple text-lg mr-2"></i>
    Apple
  </button>
</div>

      <p class="text-center text-gray-600 text-sm mt-6">
        Don't have an account?
        <a href="#" class="text-blue-600 font-semibold">Sign up</a>
      </p>
       
        <p v-if="successMessage" class="text-green-600 text-center mt-3 font-medium">
          {{ successMessage }}
        </p>

        <p v-if="errorMessage" class="text-red-600 text-center mt-3 font-medium">
          {{ errorMessage }}
        </p>
      </div>
    </div>

  
    <div class="w-[598.8px] h-[600px]">
      <img src="../../assets/imagepng.png" alt="PNG image">
    </div>
  </div>
</template>



<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            username: '',
            password: '',
            successMessage: '',
            errorMessage: ''
        };
    },
    methods: {
        ...mapActions(['login']),
        async handleLogin() {
            const response = await this.login({ username: this.username, password: this.password });
            if (response.success) {
                this.successMessage = 'Login successful!';
                this.errorMessage = '';

          
                setTimeout(() => {
                    this.successMessage = '';
                    this.$router.push('/profile');
                    console.log(this.$router)
                }, 3000);
            } else {
                this.errorMessage = response.message || 'Invalid credentials';
                this.successMessage = '';
            }
        }
    }
};
</script>


