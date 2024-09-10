<template>
    <div class="main">
        <div class="container">
            <section class="login">
                 <img src="../assets/mainmomo.png" alt="" class="logoImg">
                 <div class="form">
                    <input type="email" placeholder="Email" style="border-top-left-radius: 6px; border-top-right-radius: 6px; border-bottom: none;" v-model="email">
                    <input type="password" placeholder="Password" style="border-bottom-left-radius: 5px;" v-model="password">
                    <button class="signinBtn" @click="login">Sign in</button>
                    <p style="color: red;" v-if="error">Incorrect Password/Email</p>
                 </div>
                 <p class="forgot">Forgot Password?</p>
                 <p class="footer">&copy; Developed by Godwin Tech. 2024.</p>

            </section>
            <div class="announcement ideas">
                <h2>📢 Announcements</h2>
                <ul>
                <li><strong>Float Update:</strong> Float will be wired tonight at 7pm. Be online to confirm its transfer</li>
                <li><strong>New Policy:</strong> Your Salaries will be deducted in case of opening the shop any later than 8am</li>
                <li><strong>System Maintenance:</strong> The system will be down for maintenance on September 20th from 10 PM to 2 AM.</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                email:'',
                password:'',
                error:false,
            }
        },
        methods:{
            login(){
                if(this.email == 'demo' && this.password =="demo"){
                    this.$router.push('/menu')
                }
                else{
                    this.error = true
                
            }
            }
        }
        
       
    }
</script>
<style scoped>
    .main{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(52, 161, 101);
    }
    .container{
        min-width: 45rem;
        max-width: 50rem;
        display: flex;
        height: 80vh;
        max-height: 40rem;
  box-shadow: 20px 10px 40px rgba(0, 0, 0, 0.7), -5px 0px 10px rgba(0, 0, 0, 0.2);
       border-radius: 20px;


    }
    .login{
        background-color: white;
        width: 40%;
        border-right: 1px solid white;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        

    }
    .ideas{
        background-color: black;
        width: 70%;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .logoImg{
        width: 70%;
        max-width: 13rem;
        
        
    }
    .form{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -4rem;
    }
    input{
        border: 1px solid gray;
        padding: .4rem;
        width: 100%;
        font-size:.91rem;
    }
    input:focus{
        border: 1px solid gray;
        outline: 1px solid gray;
    }
    
    .signinBtn{
        width: 100%;
        margin-top: 1.3rem;
        padding: .6rem;
        background-color: rgb(37, 111, 208);
        color: white;
        border: 1px solid white;
        border-radius: 7px;
    }
    .forgot{
        color: gray;
        font-size: .9rem;
    }
    .footer{
        color: rgb(192, 191, 191);
        font-size: .6rem;
        
    }
    .announcement {
  background-color: #2c2c2c;
   padding: 15px;
    color: white;
}

.announcement h2 {
  color: #00aaff;  /* Blue color for header */
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.announcement ul {
  list-style-type: none;
  padding-left: 0;
}

.announcement li {
  background-color: #3a3a3a;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.announcement li strong {
  color: #00aaff; /* Blue for important text */
}

@media (max-width: 908px) {
    .announcement{
        display: none;
    }
    .main{
        display: block;
        height: 0;
    }
    .container{
        min-width: 0;
        
        display: flex;
        height: 100vh;
      
       border-radius: 20px;


    }
    .login{
        width: 100%;
        border-radius: 0;
        
    }
    .form{
        width: 100%;
    }
    input,.signinBtn{
        width: 90%;
        font-size: 1.3rem;
    }
    

    
}

</style>