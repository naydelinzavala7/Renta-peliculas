<template>
  <!--Primer Columna-->
    <v-row>
      <v-col v-for="k in 1"
        :key="k"
        md="4">
      <!--1er tarjeta-->
      <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
      > 
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://lumiere-a.akamaihd.net/v1/images/p_thelittlemermaid_2023_final_796_94759fcc.jpeg"
      ></v-img>
  
      <v-card-title>LA SIRENITA</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ms-4">
            (4.5)
          </div>
        </v-row>
        <div class="my-4 text-subtitle-1">
          <v-row
          align="center"
          class="mx-0">
             Director: Rob Marshall
          </v-row> 
          <v-row
          align="center"
          class="mx-0">
             Duracion: 2h 15m
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Genero: Fantasía/Musical
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Año: 2023
          </v-row>
        </div>
        <div>
          Sinopsis: Anhelando conocer el mundo más allá del mar, una joven 
          sirena visita la superficie y se enamora del apuesto príncipe Eric. 
          Siguiendo su corazón, hace un trato con la malvada bruja del mar, 
          Úrsula, para experimentar la vida en tierra.
        </div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Idioma</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>Español (Castellano)</v-chip>
  
          <v-chip>Español (Latino)</v-chip>
  
          <v-chip>Ingles</v-chip>

        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click= "redirectToSirenita"
        >
          Watch
        </v-btn>
      </v-card-actions>
     </v-card>
     <!--2da tarjeta-->
     <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
      >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://phantom-marca-mx.unidadeditorial.es/3331f464586e20a7835ec5578959ec67/resize/1200/f/webp/mx/assets/multimedia/imagenes/2023/04/15/16815385483724.jpg"
      ></v-img>
  
      <v-card-title>MARIO BROS</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ms-4">
            (5) 
          </div>
        </v-row>
  
        <div class="my-4 text-subtitle-1">
          <v-row
          align="center"
          class="mx-0">
             Directores: Aaron Horvath, Michael Jelenic
          </v-row> 
          <v-row
          align="center"
          class="mx-0">
             Duracion: 1h 32m
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Genero: Aventura/Fantasía
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Año: 2023
          </v-row>
        </div>
        <div>
          Sinopsis: Dos hermanos plomeros, Mario y Luigi, caen por las 
          alcantarillas y llegan a un mundo subterráneo mágico en el que 
          deben enfrentarse al malvado Bowser para rescatar a la princesa 
          Peach, quien ha sido forzada a aceptar casarse con él.
        </div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Idioma</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>Español (Castellano)</v-chip>
  
          <v-chip>Español (Latino)</v-chip>
  
          <v-chip>Ingles</v-chip>

        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click= "redirectToMarioBros"
        >
          Watch
        </v-btn>
      </v-card-actions>
     </v-card>
     <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
      >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://cdn.shopify.com/s/files/1/0265/2769/4934/products/shrek_ver3_xxlg_1200x1200.jpg?v=1581215574"
      ></v-img>
  
      <v-card-title>SHREK</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ms-4">
            (5) 
          </div>
        </v-row>
  
        <div class="my-4 text-subtitle-1">
          <v-row
          align="center"
          class="mx-0">
             Directores: Vicky Jenson, Andrew Adamson
          </v-row> 
          <v-row
          align="center"
          class="mx-0">
             Duracion: 1h 30m
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Genero: Comedia/Fantasía
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Año: 2001
          </v-row>
        </div>
  
        <div>
          Sinopsis: Un ogro llamado Shrek vive en su pantano, pero su
          preciada soledad se ve súbitamente interrumpida por la invasión
          de los ruidosos personajes de los cuentos de hadas. Todos fueron 
          expulsados de sus reinos por el malvado Lord Farquaad. Decidido a 
          salvar su hogar, Shrek hace un trato con Farquaad y se prepara para 
          rescatar a la princesa Fiona, quien será la esposa de Farquaad.
        </div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Idioma</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>Español (Castellano)</v-chip>
  
          <v-chip>Español (Latino)</v-chip>
  
          <v-chip>Ingles</v-chip>

        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click= "redirectToShrek"
        >
          Watch
        </v-btn>
      </v-card-actions>
     </v-card>
    </v-col>
  <!--Segunda Columna-->
    <v-col v-for="k in 1"
        :key="k"
        md="4">
         <!--1er tarjeta-->
         <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
      > 
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://img.asmedia.epimg.net/resizer/fekC_3_4K2Ukao2WyV0B6Po7Xc0=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/SPN5GQJ5VVIJFI6UPK7NP2PCLI.jpg"
      ></v-img>
  
      <v-card-title>AVATAR</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ms-4">
            (5) 
          </div>
        </v-row>
  
        <div class="my-4 text-subtitle-1">
          <v-row
          align="center"
          class="mx-0">
             Director: James Cameron
          </v-row> 
          <v-row
          align="center"
          class="mx-0">
             Duracion: 2h 42m
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Genero: Ciencia ficción/Acción
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Año: 2009
          </v-row>
        </div>
  
        <div>
          Sinopsis: En un exuberante planeta llamado Pandora viven los Na'vi, seres que
          aparentan ser primitivos pero que en realidad son muy evolucionados.
          Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Na'vi,
          llamados Avatares, están relacionados con las mentes humanas, lo que les 
          permite moverse libremente por Pandora. Jake Sully, un exinfante de marina 
          paralítico se transforma a través de un Avatar, y se enamora de una mujer Na'vi.
        </div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Idioma</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>Español (Castellano)</v-chip>
  
          <v-chip>Español (Latino)</v-chip>
  
          <v-chip>Ingles</v-chip>

        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click= "redirectToAvatar"
        >
          Watch
        </v-btn>
      </v-card-actions>
     </v-card>
     <!--2da tarjeta-->
     <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
      >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/7RXSCNESMBARRIMQDKZVUM6S4Y.jpg"
      ></v-img>
  
      <v-card-title>BETTY LA FEA</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ms-4">
            4.5 
          </div>
        </v-row>
  
        <div class="my-4 text-subtitle-1">
          <v-row
          align="center"
          class="mx-0">
             Director: Mario Ribero
          </v-row> 
          <v-row
          align="center"
          class="mx-0">
             Duracion: 335 episodios
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Genero: Drama/Romance
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Año: 1999
          </v-row>
        </div>
  
        <div>
          Sinopsis: Beatriz Pinzón tiene un título en finanzas. Es muy inteligente,
          pero nada atractiva. Para su suerte, consigue empleo en una de las compañías
          más importantes en el mundo de la moda, Ecomoda. Betty nunca imaginó los
          constantes desprecios que enfrentaría por su aspecto físico.
        </div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Idioma</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>Español (Castellano)</v-chip>
  
          <v-chip>Español (Latino)</v-chip>
  
          <v-chip>Ingles</v-chip>

        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click= "redirectToBetty"
        >
          Watch
        </v-btn>
      </v-card-actions>
     </v-card>
     <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
      >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2013/06/231595-critica-guerra-mundial-z.jpg"
      ></v-img>
  
      <v-card-title>GUERRA MUNDIAL Z</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ms-4">
            4.5 
          </div>
        </v-row>
  
        <div class="my-4 text-subtitle-1">
          <v-row
          align="center"
          class="mx-0">
             Director: Marc Forster
          </v-row> 
          <v-row
          align="center"
          class="mx-0">
             Duracion: 1h 56m
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Genero: Terror/Acción
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Año: 2013
          </v-row>
        </div>
  
        <div>
          Sinopsis: Cuando una pandemia de zombis amenaza con destruir 
          a la humanidad, un exinvestigador de Naciones Unidas es obligado
          a regresar al servicio para intentar descubrir la fuente de la infección.
        </div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Idioma</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>Español (Castellano)</v-chip>
  
          <v-chip>Español (Latino)</v-chip>
  
          <v-chip>Ingles</v-chip>

        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click= "redirectToGuerraZ"
        >
          Watch
        </v-btn>
      </v-card-actions>
     </v-card>
    </v-col>
  <!--Tercer Columna-->
    <v-col v-for="k in 1"
        :key="k"
        md="4">
         <!--1er tarjeta-->
         <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
      > 
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://stateless-fueradefoco.storage.googleapis.com/wp-content/uploads/2022/03/30034428/RED-Portada.jpg"
      ></v-img>
  
      <v-card-title>TURNING RED</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ms-4">
            (5) 
          </div>
        </v-row>
  
        <div class="my-4 text-subtitle-1">
          <v-row
          align="center"
          class="mx-0">
             Directora: Domee Shi
          </v-row> 
          <v-row
          align="center"
          class="mx-0">
             Duracion: 1h 40m
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Genero: Infantil/Fantasía
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Año: 2022
          </v-row>
        </div>
  
        <div>
          Sinopsis: Mei Lee, una niña de 13 años un poco rara pero segura 
          de sí misma, que se debate entre seguir siendo la hija obediente 
          que su madre quiere que sea y el caos de la adolescencia.
        </div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Idioma</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>Español (Castellano)</v-chip>
  
          <v-chip>Español (Latino)</v-chip>
  
          <v-chip>Ingles</v-chip>

        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click= "redirectToTurningR"
        >
          Watch
        </v-btn>
      </v-card-actions>
     </v-card>
     <!--2da tarjeta-->
     <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
      >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://i0.wp.com/elgeneracionalpost.com/wp-content/uploads/2021/11/Harry-Potter.jpeg?resize=696%2C409&ssl=1"
      ></v-img>
  
      <v-card-title>HARRY POTTER</v-card-title>
      <v-card-subtitle>(Y LA PIEDRA FILOSOFAL)</v-card-subtitle>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ms-4">
            4.5 
          </div>
        </v-row>
  
        <div class="my-4 text-subtitle-1">
          <v-row
          align="center"
          class="mx-0">
             Director: Chris Columbus
          </v-row> 
          <v-row
          align="center"
          class="mx-0">
             Duracion: 2h 32m
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Genero: Fantasía/Aventura
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Año: 2001
          </v-row>
        </div>
  
        <div>
          Sinopsis: El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros,
          de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, 
          donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante
          su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca
          de una piedra filosofal que alarga la vida de quien la posee.
        </div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Idioma</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>Español (Castellano)</v-chip>
  
          <v-chip>Español (Latino)</v-chip>
  
          <v-chip>Ingles</v-chip>

        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click= "redirectToHarryP"
        >
          Watch
        </v-btn>
      </v-card-actions>
     </v-card>
     <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
      >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://www.cinecutre.com/wp-content/uploads/2020/04/IMG_0657-1024x788.jpg"
      ></v-img>
  
      <v-card-title>CREPÚSCULO</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ms-4">
            4.5 
          </div>
        </v-row>
  
        <div class="my-4 text-subtitle-1">
          <v-row
          align="center"
          class="mx-0">
             Directores: Catherine Hardwicke, Bill Condon, Chris Weitz, David Slade
          </v-row> 
          <v-row
          align="center"
          class="mx-0">
             Duracion: 2h 2m
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Genero: Romance/Fantasía
          </v-row>
          <v-row
          align="center"
          class="mx-0">
             Año: 2008
          </v-row>
        </div>
  
        <div>
          Sinopsis: Bella Swan se va a vivir con su padre al pequeño pueblo de Forks,
          donde conoce a Edward, un atractivo y misterioso chico del que se enamora y
          quien esconde un gran secreto: es un vampiro. Pero la familia del chico guarda
          una peculiaridad, y es que no se alimenta de sangre humana.
        </div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Idioma</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>Español (Castellano)</v-chip>
  
          <v-chip>Español (Latino)</v-chip>
  
          <v-chip>Ingles</v-chip>

        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click= "redirectToCrepusculo"
        >
          Watch
        </v-btn>
      </v-card-actions>
     </v-card>
    </v-col>
  </v-row>
 </template>
  <script>
  export default {
  name: 'HomePage',
  methods: {
    redirectToSirenita() {
      window.location.href = 'https://youtu.be/uIvBFUYzeOc';
    },
    redirectToMarioBros() {
      window.location.href = 'https://youtu.be/9doAXdfE9dg';
    },
   redirectToShrek() {
      window.location.href = 'https://youtu.be/pVl4NwRR-c8';
    },
    redirectToAvatar() {
      window.location.href = 'https://youtu.be/1ZO0AY8Qtys';
    },
    redirectToBetty() {
      window.location.href = 'https://youtu.be/l-ZfsCdH9q8';
    },
    redirectToGuerraZ() {
      window.location.href = 'https://youtu.be/fQtRn6vAA_4';
    },
    redirectToTurningR() {
      window.location.href = 'https://youtu.be/k3jV4zJzcTE';
    },
    redirectToHarryP() {
      window.location.href = 'https://youtu.be/UTa5y_HvvSw';
    },
    redirectToCrepusculo() {
      window.location.href = 'https://youtu.be/rSa_8vs1ON4';
    }

  }
}

  </script>

<style lang="scss">
main {
 background-image: url("https://img.freepik.com/foto-gratis/fondo-azul-degradado-lujo-abstracto-azul-oscuro-liso-banner-estudio-vineta-negra_1258-54050.jpg?w=900&t=st=1686446265~exp=1686446865~hmac=3d9c63ec6bbb3a6e5bce605fdf3feb6e1179a0076e6b6bc2fd2ac0ca9ad926f9");
 background-size: cover;
}
</style>
