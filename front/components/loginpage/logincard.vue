<template>
    <div>
    
    <v-card 
      shaped elevation="15" 
      width="350" 
      height="430" 
      color="#1A314A" 
      style="margin-top: -30px; 
      padding-top: 30;"
    >
      <v-card-title  style="margin-left: 22px; font-size: 25px; padding-top: 25px;">
        Welcome to FilmWorld!
      </v-card-title>
      <v-card-text>
        <p style="padding-left: 20px;">A wide range of films at an affordable price</p>
        <v-form ref="frmLogin" style="margin-top: 30px;">
          <v-text-field
            v-model="email"
            label="Email"
            placeholder="Enter your Email"
            :rules="ValidateEmail"
          />
          <v-text-field
            v-model="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            :rules="validatePassword"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="ingresarSistema" width="310" style="background-color: #546E7A; margin-left: 13px;">
          <v-icon dense style="padding-right: 2%;">
            mdi-account-key
          </v-icon>
          Log in
        </v-btn>
      </v-card-actions>
      <div>
        <v-spacer></v-spacer>
        <span class="or-text">-Or-</span>
        <v-spacer></v-spacer>
        <signUp />
      </div>
    </v-card>

    <v-dialog v-model="dialog" width="335" transition="dialog-bottom-transition">
      <v-card-title width="335" style="background-color: rgb(125, 6, 6); padding-left: 120px;"> Warning! 
        <v-icon style="padding-left: 10px;">mdi-alert-decagram</v-icon> 
      </v-card-title>
      <v-card-text width="335" style="background-color: #FBABAB; padding-top: 20px; padding-left: 10px;">
      <div
        style="width: 100%;
               height: 100%;
               background-color: #FBABAB;
               padding-left: 15px;"
        >
        <span style="font-size: 20px; color:  rgb(125, 6, 6);">
          {{ mensaje }}
        </span>
      </div>
      </v-card-text>
    </v-dialog>
  </div>
</template>
  
  <script>
  import signUp from '~/components/register/signup.vue'
  export default {
    data () {
      return {
        email: '',
        password: '',
        ValidateEmail: [
          v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        validatePassword: [
          v => !v || v.length >= 6 || 'Password must have min 6 chars'
        ],
        dialog: false,
        mensaje: ''
      }
    },
    components: {
      signUp
    },
    methods: {
    async ingresarSistema () {
      if (this.email.length === 0 && this.password.length === 0) {
        alert('Enter your email and password')
        return
      }
      if (this.$refs.frmLogin.validate()) {
        const sendData = {
          email: this.email,
          password: this.password
        }
        await this.$auth.loginWith('local', {
          data: sendData
        }).then((res) => {
          if (res.data.alert === 'success') {
            this.$router.push('/homepage')
          } else {
            this.mensaje = 'Enter a valid user and password'
            this.dialog = true
            setTimeout(() => {
              this.dialog = false
            }, 2000)
          }
        }).catch((error) => {
          this.mensaje = 'Enter a valid user and password'
          this.dialog = true
          setTimeout(() => {
          this.dialog = false
          }, 2000)
        })
      } else {
        alert('Something went wrong')
      }
    },
    async registrarUsuario () {
      this.$router.push('/newuser')
    }
  }
  }
  </script>
  
  <style scoped>
  .or-text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: bold;
  }
  
  .colorBtn {
      background-color: white;
      display: block;
      width: 100%;
  }
  .v-dialog__container {
    display: flex !important;
  }
  .text-center {
    margin-left: 15%;
  }
  </style>
  