<template>
	<div>
    <v-btn class="colorBtn" @click="dialogCrear">
			<v-icon dense style="padding-right: 2%;">
          mdi-account-plus-outline
        </v-icon>
        Sign-Up
    </v-btn>
    
    <v-dialog
			v-model="dialogCreate"
        max-width="400"
        persistent>
				<v-card>
        <v-card-title color="#0D2C4B" style="padding-left: 130px; background-color: #4082AF;" > Create Account
          <button>
            <v-icon style="padding-left: 63px;" @click="dialogCreate=false">mdi-window-close</v-icon>
          </button>
          <v-icon style="padding-left: 50px;"> mdi-account-plus </v-icon>
        </v-card-title>
        <v-card-text>
          <v-form ref="frmCreate" style="margin-top: 15px;">
            Name:
                <v-text-field
                  v-model="name"
                  placeholder="Enter your name"
                  :rules="reglaNombre"
                >  </v-text-field> 
            Lastname:
                <v-text-field
                  v-model="lastname"
                  placeholder="Enter your lastname"
                  :rules="reglaApellido"
                >  </v-text-field>
            Email:
                <v-text-field
                  v-model="email"
                  placeholder="Enter a valid Email"
                  :rules="validateEmail"
                >  </v-text-field>
            Password:
                <v-text-field
                  v-model="password"
                  placeholder="Enter a valid Password"
                  type="password"
                  :rules="validatePassword"
                >  </v-text-field> <br><br>
            <h2 style="background-color: #4082AF; padding-left: 50px; padding-top: 20px; padding-bottom: 20px;">Method of Payment
              <v-icon>mdi-account-credit-card</v-icon>
            </h2><br>
            Credit or debit card number:
                <v-text-field
                  v-model="numtarjeta"
                  placeholder="Enter your card number"
                  :rules="reglaTarjeta"
                > </v-text-field>
                Fecha de vencimiento:
                <v-text-field
                  v-model="fechavenc"
                  placeholder="Enter your card number"
                  :rules="reglaFecha"
                > </v-text-field>
                Código de seguridad;
                <v-text-field
                  v-model="codigoseg"
                  placeholder="Enter your security code"
                  :rules="reglaCodigo"
                > </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions> 
          <v-btn color="#546E7A" @click="creado(); dialogCreate=false" block>
            Register
          </v-btn>
        </v-card-actions>
      </v-card>
		</v-dialog>

		<v-dialog v-model="dialog" width="300"  transition="dialog-bottom-transition">
      <v-card-title width="300" style="background-color: #1A314A; padding-left: 100px;"> Attention!
        <br>
        <v-icon style="padding-left: 10px;">
          mdi-check-circle
        </v-icon> </v-card-title>
      <v-card-text width="300" style="background-color: #546E7A; padding-top: 25px; padding-left: 30px;">
      <div 
        style="width: 100%; 
               height: 50px; 
               background-color: #546E7A;"
      >
        <span width="300" style="font-size: 20px; font-weight: 600; color: #1A314A;">
          {{ mensaje }}
        </span>
      </div>
      </v-card-text>
    </v-dialog>
	</div>
</template>

<script>
export default {
    data() {
      return{
          usuarios: [],
          email: '',
          password: '',
          user: {},
          reglaNombre: [
            v => !v || v.length >= 3 || 'El nombre requiere como mínimo 3 caracteres'
          ],
          reglaApellido: [
            v => !v || v.length >= 3 || 'El o los apellidos, requieren como mínimo 3 caracteres'
          ],
          validateEmail: [
          v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
          ],
          validatePassword: [
          v => !v || v.length >= 8 || 'Password must have min 8 chars'
          ],
          reglaTarjeta: [
          v => !v || v.length >= 16 || 'You must type 16 numbers'
          ],
          reglaFecha: [
          v => !v || v.length >= 5 || 'Type year and month'
          ],
          reglaCodigo: [
          v => !v || v.length >= 4 || 'You must type in the 4 digit code'
          ],
          dialog: false,
          mensaje: '',
          dialogCreate: false,
      }
    },
		methods: {
			dialogCrear (item){
          this.dialogCreate = true 
      },
      async creado() {
        const config = {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Acces-Control-Allow-Origin': '*'
          }
        }
        const userCreate ={
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            numtarjeta: this.numtarjeta,
            fechavenc: this.fechavenc,
            codigoseg: this.codigoseg
        }
        await this.$axios.post('/insertar',
          userCreate,
          config
        ).then((res) => {
          console.log(res)
          this.dialogCrear = false
          this.mensaje = 'Successfully created user'
          this.dialog = true
          setTimeout(() => {
              this.dialog = false
            }, 3000)
        }).catch((e) => {
            console.log(e)
        })
      }
		}
}
</script>

<style scoped>
.colorBtn {
    background-color: white;
    display: block;
    width: 90%;
		margin-left: 5%;
		margin-top: 5%;
}
</style>
