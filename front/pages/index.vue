<template>
    <div class="container">
      <div class="left-section">
        <v-carousel :cycle="true">
          <v-carousel-item v-for="(item, index) in carouselItems" :key="index">
            <img :src="item.image" alt="Imagen" style="width: 100%; height: auto"/>
          </v-carousel-item>
        </v-carousel>
      </div>
    <div class="right-card">
        <loginCard />
    </div>
    </div>
  </template>
  
  <script>
  import loginCard from '~/components/loginpage/logincard.vue'
  export default {
    name: 'IndexPage',
    data() {
      return {
        carouselItems: [
          { image: 'https://images.squarespace-cdn.com/content/v1/581bd18003596e16cc905cad/1680884608407-HZ5VSDY2QNBFXEYDCBKF/TE+-+the-super-mario-bros-movie-SMB_1920x1080_RainbowRoad_RGB_2_rgb.png?format=1500w' },
          { image: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/461ef09d460b5b4e4365c2826823db04.png'},
          { image: 'https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/33e62911-2708-4875-9c71-9926f571e1c1/The%2BBatman.jpg?format=1000w'},
          { image: 'https://wallpaperaccess.com/full/2135082.png' },
          { image: 'https://external-preview.redd.it/S6-N-offuNFAKsuNdbVOUFI0UunoyqPMzrFcsyHp9HM.jpg?auto=webp&s=67e86b9690ba6ff2a04d9cca9a937365adabd6dc' },
          { image: 'https://alicantemag.com/wp-content/uploads/2021/06/portraitofaladyonfirewhorizontal.jpg' },
          { image: 'https://w0.peakpx.com/wallpaper/1016/668/HD-wallpaper-kill-bill-kill-bill-vol-2.jpg'}
        ],
      };
    },
    components: {
      loginCard
    }
  }
  </script>
  
  <style lang="scss">
  .container {
    display: flex;
  }
  
  .left-section {
    flex: 1;
  }
  .right-card {
    float: right; /* Alinea la tarjeta a la derecha */
    margin-left: 20px; /* Agrega un margen izquierdo para separarla del contenido principal */
    margin-top: 30px;
  }

  main {
    background-image: url("https://img.freepik.com/foto-gratis/fondo-azul-degradado-lujo-abstracto-azul-oscuro-liso-banner-estudio-vineta-negra_1258-54050.jpg?w=900&t=st=1686446265~exp=1686446865~hmac=3d9c63ec6bbb3a6e5bce605fdf3feb6e1179a0076e6b6bc2fd2ac0ca9ad926f9");
    background-size: cover;
  }
  </style>
  