<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Codificación web
    p.mb-5 El proceso de maquetación web es la transformación del diseño o prototipo a un producto web en un conjunto de archivos (html, css, js), de manera que serán desplegados (renderizados) por un navegador.
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4
          p.mb-0 La maquetación web es el proceso que consiste en tomar el prototipo gráfico, también denominado «layout»  (con los requisitos estructurales y estéticos definidos y aprobados en un análisis inicial), y transformarlo en código html, css y js (estándares web), para que los navegadores puedan interpretarlo correctamente (Edición y maquetación de documentos web, 2012).
    .row.mb-5(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img12.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Uso de estilos
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 420px" ,alt='').m-auto
      .col-lg-8
        p.mb-0 El uso de las hojas de estilo comprende aplicar cambios en las propiedades de los elementos html determinados en la maquetación o definición del diseño, esto es uno de los beneficios determinados por los frameworks CSS, que proporcionan una estructura html con la configuración predeterminada de los componentes. Es decir, que si se tiene un elemento tipo tarjeta, se usará, probablemente, el tag &lt;article&gt;	 o &lt;div&gt;	, y se le aplicarán los estilos necesarios, ya sea color, tipografía, tamaño de letra, títulos, párrafos, etc.
    .row.mb-5(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c7
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 #[i Movie first design] vs. #[i Responsive web design]
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width: 80px" ,alt='').m-auto
      .col
        p.mb-0 Algunos de los #[i frameworks] CSS definían clases, con atributos y estructuras prediseñadas, con la finalidad de tener plantillas que se pudieran redimensionar de acuerdo con la pantalla del dispositivo en el cual se estuviera renderizando, a este tipo de diseños se les denomina adaptativos, es decir que, al minimizar la resolución, se minimiza el tamaño del contenido. 

</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
