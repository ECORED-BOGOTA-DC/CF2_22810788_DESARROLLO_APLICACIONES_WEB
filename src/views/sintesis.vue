<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 En la actualidad muchas de las aplicaciones web desarrolladas tanto de correo como de mensajería, tienen alto contenido de JavaScript; por esta razón y con el objetivo de crear páginas innovadoras y dinámicas, es necesario que conozca los requerimientos del hardware y software de IDE, los comandos básicos, la configuración e instalación del entorno, es decir, es necesario tener claros los conceptos de preparación del entorno al igual de la codificación web, por lo que este componente formativo resume a través del siguiente esquema todos los temas abordados y que cumplen la finalidad que se tiene sobre el conocimiento que se debe apropiar para el diseño de este tipo de aplicaciones, esto es:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
