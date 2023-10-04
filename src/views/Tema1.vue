<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Preparación del entorno
    p(data-aos="fade-right") Node.js llegó para quedarse y, como lo expresan los desarrolladores del #[b #[i front-end]], es un beneficio para todos aquellos que trabajan con JavaScript, ya que, para codificar en el #[b #[i back-end]], entre otros, no será necesario aprender otro lenguaje. En este momento, es posible crear aplicaciones bidireccionales, en las que tanto el cliente como el servidor pueden comunicarse a fondo en tiempo real e intercambiar datos, de hecho, #[b #[i Node.js]] ha promovido y revolucionado los desarrollos implementando funcionalidades en tiempo real con #[b #[i WebSockets]]. 
    p.mb-5(data-aos="fade-right") Esta tecnología es empleada por muchas compañías, entre las cuales se pueden encontrar:
    .row.justify-content-center(data-aos="fade-down")
      .col-10.col-md-5.col-xl.bg-c2.m-2
        .p-4
          figure
            img(src='@/assets/curso/tema1/img1.svg', style="width: 180px" ,alt='').m-auto
      .col-10.col-md-5.col-xl.bg-c2.m-2
        .p-4
          figure
            img(src='@/assets/curso/tema1/img2.svg', style="width: 180px" ,alt='').m-auto
      .col-10.col-md-5.col-xl.bg-c2.m-2
        .p-4
          figure.mt-0.mt-md-3
            img(src='@/assets/curso/tema1/img3.svg', style="width: 180px" ,alt='').m-auto
      .col-10.col-md-5.col-xl.bg-c2.m-2
        .p-4
          figure
            img(src='@/assets/curso/tema1/img4.svg', style="width: 180px" ,alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-10.col-md-5.col-xl.bg-c2.m-2
        .p-4
          figure.mt-0.mt-md-3
            img(src='@/assets/curso/tema1/img5.svg', style="width: 180px" ,alt='').m-auto
      .col-10.col-md-5.col-xl.bg-c2.m-2
        .p-4
          figure.mt-0.mt-md-3
            img(src='@/assets/curso/tema1/img6.svg', style="width: 180px" ,alt='').m-auto
      .col-10.col-md-5.col-xl.bg-c2.m-2
        .p-4
          figure.mt-0.mt-md-3
            img(src='@/assets/curso/tema1/img7.svg', style="width: 180px" ,alt='').m-auto
      .col-10.col-md-5.col-xl.bg-c2.m-2
        .p-4
          figure
            img(src='@/assets/curso/tema1/img8.svg', style="width: 180px" ,alt='').m-auto
    p(data-aos="fade-right") Analizando la operación de las compañías mencionadas, es posible destacar su operación en el ámbito del servicio o producto, y sus desarrollos dependen de Node.js, para poder implementar estas funcionalidades que son críticas, y es que Node.js se puede aplicar para cualquier solución, de cualquier negocio.
    .row.align-items-center.mb-3
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img9.svg', style="width: 460px" ,alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Algunas de las particularidades y ventajas de usar Node.js son las siguientes:
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Sintaxis simple, heredada de JavaScript.
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Una curva de aprendizaje ágil y sencilla.
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Capacidad de escalar rápidamente cualquier solución.
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Código abierto y flexible.
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Desarrollo de aplicaciones multiplataforma, es compatible con Windows, Linux y OSX.
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Ser fullstack con un solo lenguaje de programación.
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Desarrollos en #[i real time].
          li.d-flex
            i.fas.fa-check(style="color: #451484")
            |
            p.mb-0 Alta comunidad y activa.
    p.mb-5(data-aos="fade-right") Node.js está fundamentado en una arquitectura ‘#[b #[i Single Threaded Event Loop]]’, el que permite manejar varios clientes al mismo tiempo. Esto es un modelo solicitud-respuesta multihilo, en el que cada petición se controla por un hilo aparte, con lo que agiliza el proceso de solicitudes concurrentes.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-down")
      p.mb-0 #[b Figura 1]. Arquitectura Node.js
    .row.mb-5(data-aos="fade-down")
      .col-12.bg-c3
        .p-4
          figure
            img(src='@/assets/curso/tema1/img1.png', style="width: 660px" ,alt='').m-auto
    p.mb-5(data-aos="fade-right") Node.js tiene una forma particular de funcionar, explicada en la siguiente manera:
    SlyderF.mb-5(columnas="col-md-6 col-xl-4")(data-aos="fade-left")
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
        h4.txt-c1 A.
        p Node.js tiene un número limitado de pool de hilos para atender solicitudes.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
        h4.txt-c1 B.
        p Cada que llega una petición, Node.js la pone en cola.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
        h4.txt-c1 C.
        p El bucle de eventos, que se ejecuta en un solo hilo principal, actúa esperando de forma indefinida las peticiones.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
        h4.txt-c1 D.
        p Al llegar una petición, el bucle recoge la cola y valida si hay alguna petición de E/S bloqueante; en caso de que no sea así, procesa la solicitud y envía una respuesta.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
        h4.txt-c1 E.
        p Si llega una solicitud de bloqueo, el bucle asigna un hilo de ejecución definido en el pool. A estos hilos auxiliares se les denomina grupo de trabajadores.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
        h4.txt-c1 F.
        p El bucle tiene la trazabilidad de las solicitudes que se bloquean y las maneja en una cola, de tal modo que cuando se procese el resultado, se libera el hilo. De esta forma, Node.js presenta siempre una funcionalidad no bloqueante.
    p.mb-0(data-aos="fade-right") Teniendo en cuenta que Node.js utiliza menos hilos, por lógica, utiliza menos recursos CPU / memoria y ejecuta más rápido las tareas.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-botones
      h2 1.1 Requerimientos #[i hardware] y #[i software] de IDE
    .row.align-items-center.mb-5(data-aos="fade-down")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema1/img11.svg', style="width: 60px" ,alt='').m-auto
      .col
        p.mb-0 Para instalar Node.js, no se tendrán requerimientos muy complejos; el primero y más importante es conceptual, y es tener un conocimiento previo del lenguaje de programación #[b #[i JavaScript]]; por otro lado, en segundo lugar, es muy importante tener conocimientos en POO (Programación orientada a objetos).
    .row.mb-5(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img12.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 Requisitos de sistema
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 Node.js no requiere una configuración compleja para poder instalarse, prácticamente en cualquiera de los equipos usados en esta época se puede ejecutar Node.js, incluso en tarjetas de Arduino puede ser instalado y ejecutado. Solo se vería afectado si hay otro aplicativo que aparque gran porcentaje de memoria, de lo contrario, a no ser que se tenga un equipo extremadamente viejo, Node.js se ejecuta con normalidad.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img2.png', style="width: 460px" ,alt='').m-auto
    .row.mb-5(data-aos="fade-down")
      .col-auto.px-3.py-2.bg-c4
        .row.align-items-center
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img12.svg', style="width: 5px" ,alt='').m-auto
          .col
            h3.mb-0 IDE o Editores de Texto
    .row.justify-content-center.mb-5
      .col-lg-9
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img13.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los IDE (Entornos de desarrollo integrado, en español), o editores de texto, son aplicativos que permiten crear otros aplicativos, sus interfaces son relativamente similares unas a las otras, ya que presentan un panel izquierdo donde se puede visualizar el namespace o el folder del proyecto; en la parte central, el editor de código; y a la parte derecha, por lo general, un panel de extensiones o utilidades adicionales, entre otros.
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Una de las principales diferencias entre un IDE y un editor de texto es que el primero, por lo general, contiene más ayudas, plugins y componentes que apoyan el proceso de desarrollo, aunque también y más importante, es que, por lo general, contiene un compilador, lo que permite que el código fuente sea chequeado antes de ser empaquetado y desplegado, esto los hace herramientas complejas y pesadas, tanto para descarga como en consumo de recursos, por ejemplo .Net framework y Windows Forms; para poder crear una aplicación en estas tecnologías, será necesario utilizar Visual Studio, que es el IDE de Microsoft para crear aplicaciones para Windows. Por otro lado, los editores son, por decirlo de una manera, una parte de un IDE, donde se pueden codificar aplicaciones, y el proceso de compilación se realiza o delega a otro componente externo. Una particularidad de este tipo de herramientas es que son muy livianas y consumen menos recursos.
        p.mb-0 Algunas recomendaciones para usar son las siguientes:
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img3.png', style="width: 460px" ,alt='').m-auto
    TabsA.color-acento-contenido.mb-4(data-aos="fade-down")
      .tarjeta.color-acento-botones.p-4(titulo="Visual Studio Code")
        .row
          .col-12.p-4
            p Es una herramienta de Microsoft, una aplicación de código abierto que permite desarrollar aplicaciones en Node.js, con las funcionalidades de edición, depuración y compilación de código, es un software ligero, pero muy potente. 
            p Viene de forma predeterminada con soporte a JavaScript y con plugins para dar soporte a Node.js; otra característica es que es multiplataforma, dado que existe su versión para Windows, Mac y Linux.
            a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
              span Interfaz Visual Studio Code
              .indicador--click(v-if="mostrarIndicador")
      .tarjeta.color-acento-botones.p-4(titulo="Intellij IDEA")
        .row
          .col-12.p-4
            p Es otro popular editor usado para el desarrollo en diferentes plataformas y lenguajes, es desarrollado por JetBrains con el apoyo de Java y Kotlin. Permite aplicaciones desarrolladas en Java, JavaScript, HTML, CSS, Node.Js, Angular.js, React, entre otros. Es una de las mejores herramientas, teniendo en cuenta los múltiples complementos para realizar conexiones, como base de datos, contenedores Docker, entre otros. 
            p Esta plataforma tiene dos versiones, una #[i community], que es gratuita, y la que es licenciada, para la cual se puede crear una cuenta estudiantil por un año; también cuenta con licencias individuales o empresariales.
            a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
              span Interfaz Intellij IDEA
              .indicador--click(v-if="mostrarIndicador")
      .tarjeta.color-acento-botones.p-4(titulo="Eclipse")
        .row
          .col-12.p-4
            p Es un IDE basado en la nube, se considera uno de los mejores editores para desarrollar aplicaciones en Node.js. Permite establecer un espacio de trabajo para que los desarrolladores puedan trabajar de manera simultánea, de una forma organizada y eficiente; es un proyecto de código abierto, que incluye un servidor tipo de API RestFul, entre otros elementos.
            a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
              span Interfaz Eclipse
              .indicador--click(v-if="mostrarIndicador")
      .tarjeta.color-acento-botones.p-4(titulo="Sublime Text")
        .row
          .col-12.p-4
            p Es un IDE basado en la nube, también de la casa de Microsoft, muy popular en el desarrollo de aplicaciones web con JavaScript; presenta una interfaz sencilla, liviano, no aparca muchos recursos de CPU y RAM, y algo sumamente agradable e importante es que es gratuito.
            a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
              span Interfaz Sublime Text
              .indicador--click(v-if="mostrarIndicador")
      .tarjeta.color-acento-botones.p-4(titulo="Atom")
        .row
          .col-12.p-4
            p Es un IDE de código abierto que se encuentra disponible para todos los sistemas operativos; al igual que su competencia, soporta diferentes lenguajes y tipos de proyectos.
            a.boton.color-acento-botones.indicador__container(@click="modal5 = true")
              span Interfaz Atom
              .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-12
          .row.mb-3
            .col-auto.bg-c5.px-3.p-2
              p.mb-0 #[b Interfaz Visual Studio Code]
          figure
            img(src='@/assets/curso/tema1/img4.png', style="width: 620px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .col-12
          .row.mb-3
            .col-auto.bg-c5.px-3.p-2
              p.mb-0 #[b Interfaz Intellij IDEA]
          figure
            img(src='@/assets/curso/tema1/img5.png', style="width: 700px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .col-12
          .row.mb-3
            .col-auto.bg-c5.px-3.p-2
              p.mb-0 #[b Interfaz Eclipse]
          figure
            img(src='@/assets/curso/tema1/img6.png', style="width: 800px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal4")
      .row.align-items-center
        .col-12
          .row.mb-3
            .col-auto.bg-c5.px-3.p-2
              p.mb-0 #[b Interfaz Sublime Text]
          figure
            img(src='@/assets/curso/tema1/img7.png', style="width: 850px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal5")
      .row.align-items-center
        .col-12
          .row.mb-3
            .col-auto.bg-c5.px-3.p-2
              p.mb-0 #[b Interfaz Atom]
          figure
            img(src='@/assets/curso/tema1/img8.png', style="width: 740px" ,alt='').m-auto
    p.mb-0(data-aos="fade-right") Como se puede concluir, para el desarrollo de aplicaciones web, especialmente de Node.js, se pueden encontrar diferentes IDE con los cuales construir sistemas sorprendentes, todo dependerá de cómo se use cada herramienta y de la preferencia del equipo de desarrollo o del desarrollador, para inclinarse por uno u otro.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-botones
      h2 1.2 Configuración e instalación de entorno Node.js
    p.mb-5(data-aos="fade-right") En este punto, se va a recordar el paso a paso para instalar Node.js. Si ya se realizó previamente, solo valide qué versión tiene en la actualidad; para ello, observe:
    .tarjeta.tarjeta--azul.p-4.p-lg-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Descargar el instalador]
            p.mb-0 Teniendo en cuenta el sistema operativo de su máquina, descargar el paquete de instalación pertinente, el cual podrá encontrar en la siguiente dirección: 
              |
              a(href="https://nodejs.org/es/download/" target="_blank") https://nodejs.org/es/download/
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img9.png', style="width: 580px" ,alt='')
            .row.mx-0
              .col-auto.bg-c6.px-3.py-2
                p.mb-0.text-white #[b Descargar el instalador]
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Inicio del proceso de instalación]
            p.mb-0 Una vez se tenga el archivo respectivo de instalación, dar doble clic para iniciar el #[i wizard] de instalación, y luego, dar clic en siguiente.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img10.png', style="width: 580px" ,alt='')
            .row.mx-0
              .col-auto.bg-c6.px-3.py-2
                p.mb-0.text-white #[b Proceso de instalación]
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Términos y condiciones]
            p.mb-0 Para poder iniciar el proceso de instalación de Node.js, el #[i wizard] mostrará una pantalla de aceptación de términos y condiciones, el cual hace referencia a las especificaciones de la licencia del producto.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img11.png', style="width: 580px" ,alt='')
            .row.mx-0
              .col-auto.bg-c6.px-3.py-2
                p.mb-0.text-white #[b Términos y condiciones]
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Ubicación de la instalación]
            p.mb-0 Por defecto, el #[i wizard] de instalación seleccionará una ruta por defecto, pero esta puede ser establecida de forma personalizada por el usuario.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img12.png', style="width: 580px" ,alt='')
            .row.mx-0
              .col-auto.bg-c6.px-3.py-2
                p.mb-0.text-white #[b Ubicación de la instalación]
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Módulos nativos]
            p.mb-0 Es posible que el usuario realice una instalación personalizada y avanzada, por lo cual podrá escoger cuál de las opciones desea instalar; dado el caso de que no requiera hacer ajustes, se instalará la configuración por defecto.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img14.png', style="width: 580px" ,alt='')
            .row.mx-0
              .col-auto.bg-c6.px-3.py-2
                p.mb-0.text-white #[b Módulos nativos]
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Configuración avanzada]
            p.mb-0 Es posible que el usuario realice una instalación personalizada y avanzada, por lo cual podrá escoger cuál de las opciones desea instalar; dado el caso que no requiera hacer ajustes, se instalará la configuración por defecto.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img13.png', style="width: 580px" ,alt='')
            .row.mx-0
              .col-auto.bg-c6.px-3.py-2
                p.mb-0.text-white #[b Configuración avanzada]
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Ejecución de la instalación]
            p.mb-0 Posteriormente a todas las configuraciones de instalación, se procederá a confirmar el proceso de instalación.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img15.png', style="width: 580px" ,alt='')
            .row.mx-0
              .col-auto.bg-c6.px-3.py-2
                p.mb-0.text-white #[b Ejecución de la instalación]
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Proceso de instalación]
            p.mb-0 Mientras el paquete de Node.js se está instalando, aparecerá una pantalla de progreso que indicará el estado de la instalación.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img22.png', style="width: 580px" ,alt='')
            .row.mx-0
              .col-auto.bg-c6.px-3.py-2
                p.mb-0.text-white #[b Proceso de instalación]
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p #[b Finalización]
            p.mb-0 Cuando se finalice el proceso de instalación, aparecerá una ventana de confirmación, que indica que la instalación fue completada satisfactoriamente.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img23.png', style="width: 580px" ,alt='')
            .row.mx-0
              .col-auto.bg-c6.px-3.py-2
                p.mb-0.text-white #[b Finalización]
    Separador
    #t_1_3
    .titulo-segundo.color-acento-botones
      h2 1.3 Comandos básicos
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-md-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema1/img15.svg', style="width: 80px" ,alt='').m-auto
      .col
        p.mb-0 Después del proceso de instalación, se habrán adquirido varias herramientas que permitirán el desarrollo de aplicaciones con Node.js, entre las cuales se encuentra el npm (Node Package Management). Observe a continuación:
    .row.justify-content-center.mb-2(data-aos="fade-left")
      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p Una vez instalado el Node.js, debemos abrir una consola ("Símbolo del sistema") en nuestro sistema operativo para verificar que funciona correctamente; esto lo podemos hacer desde el menú de Windows:
          a.boton.color-acento-botones.indicador__container(@click="modal6 = true")
            span CMD Node.js
            .indicador--click(v-if="mostrarIndicador")
      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 2
          p O escribiendo el comando "cmd" desde "Búsqueda en Windows":
          a.boton.color-acento-botones.indicador__container(@click="modal7 = true")
            span Símbolo de sistema Windows
            .indicador--click(v-if="mostrarIndicador")
      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          p Si el programa Node.js se instaló correctamente, al tipear node en la consola, debería aparecer:
          a.boton.color-acento-botones.indicador__container(@click="modal8 = true")
            span Validación
            .indicador--click(v-if="mostrarIndicador")
      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 4
          p Desde esta línea de comandos, podemos ejecutar instrucciones en JavaScript para ver que Node.js efectivamente está funcionando:
          a.boton.color-acento-botones.indicador__container.mb-4(@click="modal9 = true")
            span Información de instalación
            .indicador--click(v-if="mostrarIndicador")
          a.boton.color-acento-botones.indicador__container(@click="modal10 = true")
            span Validación de versión NODE
            .indicador--click(v-if="mostrarIndicador")
      .col-md-6.col-xl-4.mb-4
        .tarjeta-numerada.color-adicional-1.p-5
          .tarjeta-numerada__numero
            .h2 5
          p Luego, validemos la instalación del npm:
          a.boton.color-acento-botones.indicador__container.mb-4(@click="modal11 = true")
            span Validación de versión NPM
            .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal6")
      .row.align-items-center
        .col-12
          .row.mb-3
            .col-auto.bg-c5.px-3.p-2
              p.mb-0 #[b CMD Node.js]
          figure
            img(src='@/assets/curso/tema1/img16.png', style="width: 340px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal7")
      .row.align-items-center
        .col-12
          .row.mb-3
            .col-auto.bg-c5.px-3.p-2
              p.mb-0 #[b Símbolo de sistema Windows]
          figure
            img(src='@/assets/curso/tema1/img17.png', style="width: 240px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal8")
      .row.align-items-center
        .col-12
          .row.mb-3
            .col-auto.bg-c5.px-3.p-2
              p.mb-0 #[b Validación]
          figure
            img(src='@/assets/curso/tema1/img18.png', style="width: 640px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal9")
      .row.align-items-center
        .col-12
          .row.mb-3
            .col-auto.bg-c5.px-3.p-2
              p.mb-0 #[b Información de instalación]
          figure
            img(src='@/assets/curso/tema1/img19.png', style="width: 640px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal10")
      .row.align-items-center
        .col-12
          .row.mb-3
            .col-auto.bg-c5.px-3.p-2
              p.mb-0 #[b Validación de versión NODE]
          figure
            img(src='@/assets/curso/tema1/img20.png', style="width: 640px" ,alt='').m-auto
    ModalA(:abrir-modal.sync="modal11")
      .row.align-items-center
        .col-12
          .row.mb-3
            .col-auto.bg-c5.px-3.p-2
              p.mb-0 #[b Validación de versión NPM]
          figure
            img(src='@/assets/curso/tema1/img21.png', style="width: 640px" ,alt='').m-auto
    p.mb-0(data-aos="fade-right") Con esto, se puede validar que Node y el npm están correctamente instalados y se puede proseguir a realizar la construcción y configuración de proyectos.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
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
