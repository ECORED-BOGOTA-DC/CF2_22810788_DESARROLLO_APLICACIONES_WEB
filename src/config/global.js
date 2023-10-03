export default {
  global: {
    componenteFormativo: 'Aplicaciones web en tiempo real con JavaScript',
    descripcionCurso:
      'En este componente, se abordarán los conceptos fundamentales y básicos del lenguaje de programación JavaScript, en conjunto con tecnologías como comandos básicos, Node.js, servidor socket y requerimientos de <i>hardware</i> y <i>software</i> de IDE, para el desarrollo de aplicaciones del lado del cliente y servidor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Preparación del entorno',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Requerimientos <i>hardware</i> y <i>software</i> de IDE',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Configuración e instalación de entorno Node.js',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Comandos básicos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Codificación web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Creación proyecto Node.js',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Creación e instalación de servidor Express sobre Node.js',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Configuración de Apache para aplicación cliente',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Codificación de petición tradicional HTTP, síncrona',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Codificación de servidor socket con Node.js',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Codificación de cliente socket con JavaScript',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Tabla de comparación entre implementaciones',
            hash: 't_2_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Curso de Node.js',
      referencia: 'Moisset, D. (s. f.). <i>Node.js Ya</i>. Tutoriales Ya.',
      tipo: 'Tutoriales',
      link: 'https://www.tutorialesprogramacionya.com/javascriptya/nodejsya/',
    },
  ],
  glosario: [
    {
      termino: '<em>Backend</em>',
      significado:
        'desarrollo que se realiza del lado del servidor, aplicaciones que centralizan principalmente la lógica del negocio, las bases de datos y los recursos de un sistema para que sean consumidos por una aplicación tipo cliente, o un <i>frontend</i>.',
    },
    {
      termino: 'Cliente',
      significado:
        'son aplicaciones que permiten consumir información de un servidor, toda aplicación de escritorio que tiene comunicación con un servidor es un cliente.',
    },
    {
      termino: '<i>Framework</i>',
      significado:
        'librería o marco de trabajo que contiene clases, funciones, configuraciones, paquetes y componentes, que son comunes en el desarrollo de funcionalidades.',
    },
    {
      termino: '<i>Frontend</i>',
      significado:
        'desarrollo que se realiza del lado del cliente, aplicaciones web, aplicaciones de escritorio, aplicaciones móviles; estas se despliegan en la máquina del usuario. Esta es la capa o el nivel con el que los usuarios interactúan.',
    },
    {
      termino: 'JavaScript',
      significado:
        'lenguaje de programación tipo <i>scripting</i> que sirve para agregar funcionalidad a documentos web.',
    },
    {
      termino: '<i>Localhost</i>',
      significado:
        'en el contexto de las redes de computadoras, <i>localhost</i> es una computadora que ejecuta un programa. La computadora que se tiene al frente funciona también como un servidor virtual. Este modo es comúnmente utilizado para realizar pruebas en el desarrollo web.',
    },
    {
      termino: 'Socket',
      significado:
        'proceso asíncrono en el cual dos procesos pueden intercambiar información.',
    },
    {
      termino: 'Servidor',
      significado:
        'son aplicaciones que permiten servir o disponer contenido para el consumo de otras aplicaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Luna, F., Peña, C. y Iacono, M. (2018). <i>PROGRAMACIÓN WEB Full Stack 16-Webs dinámicas con AJAX y PHP: Desarrollo frontend y backend-Curso visual y práctico</i>. RedUsers.',
      link: '',
    },
    {
      referencia:
        'Navarrete, L. y Cárdenas, M. (2016). <i>Diseño y desarrollo de un CMS (Content Management System) para código abierto utilizando Node.JS y Mongo.DB como base de datos documental</i>. Universidad Politécnica Salesiana. ',
      link: 'http://dspace.ups.edu.ec/handle/123456789/12424',
    },
    {
      referencia:
        'Paterna, R. (2015). <i>Desarrollo de una aplicación colaborativa síncrona-asíncrona con persistencia en un entorno web</i>. Universidad Politécnica de Madrid. ',
      link: 'https://oa.upm.es/41062/',
    },
    {
      referencia:
        'Puciarelli, L. (2020). <i>Node JS-Vol. 1: Instalación-Arquitectura-node y npm (Vol. 1)</i>. RedUsers.',
      link: '',
    },
    {
      referencia:
        'Puranik, D., Feiock, D. y Hill, J. (2013). <i>Real-time monitoring using AJAX and WebSockets</i>. IEEE.',
      link: '',
    },
    {
      referencia:
        'Trejos, O. (2018). <i>WhatsApp como herramienta de apoyo al proceso de enseñanza y aprendizaje de la programación de computadores</i>. Educación y ciudad, (35), p. 149-158. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6702430',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Adolfo Rodríguez Quinayas',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Leydy Jhuliana Jaramillo Mejía',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Rey',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollo fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
