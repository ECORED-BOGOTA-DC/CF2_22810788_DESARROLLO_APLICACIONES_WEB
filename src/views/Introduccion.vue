<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pt-5
          .row.align-items-center.mb-5(data-aos="fade-right")
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/intro/img2.svg', style="width: 80px" ,alt='').m-auto
            .col
              p.mb-0 En el desarrollo de este componente formativo se hace necesario hacer un recorrido por algunos elementos a tener en cuenta, para ello se debe observar.
          figure(data-aos="fade-left")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
