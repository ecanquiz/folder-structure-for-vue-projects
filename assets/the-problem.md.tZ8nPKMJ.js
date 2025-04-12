import{_ as o,c as a,o as r,ae as s}from"./chunks/framework.oSdz25v6.js";const t="/folder-structure-for-vue-apps/assets/the-problem-01.CIcNpAPi.png",c="/folder-structure-for-vue-apps/assets/the-problem-02.EfzoYg8r.png",n="/folder-structure-for-vue-apps/assets/the-problem-03.8FLNKBtX.png",h=JSON.parse('{"title":"El Problema","description":"","frontmatter":{},"headers":[],"relativePath":"the-problem.md","filePath":"the-problem.md"}'),l={name:"the-problem.md"};function p(i,e,d,u,m,g){return r(),a("div",null,e[0]||(e[0]=[s('<h1 id="el-problema" tabindex="-1">El Problema <a class="header-anchor" href="#el-problema" aria-label="Permalink to &quot;El Problema&quot;">​</a></h1><p>Suponiendo que vamos a revisar la página de <strong>Iniciar Sesión</strong> para depurar nuestro código. Entramos en la carpeta <code>src/modules/Auth/views/</code> y seleccionamos el archivo <code>Login.vue</code>.</p><p><img src="'+t+'" alt="the-problem"></p><p>Tenga en cuenta que <code>Login.vue</code> importa dos (2) archivos: el componente <code>LoginForm.vue</code> y el composable <code>useLogin.ts</code>, respectivamente.</p><p><img src="'+c+'" alt="the-problem"></p><p>Afortunadamente nuestro código ya está ordenado por módulos. En este caso, todo lo que necesitamos revisar está ubicado en el módulo <code>Auth</code>.</p><p><img src="'+n+'" alt="the-problem"></p><p>Tomando en cuenta que estos archivos no son reutilizables, nos preguntamos:</p><ul><li>Es suficiente agrupar los archivos por módulos y luego por el tipo de archivos? En este caso, para clasificarlos nos obliga a colocarle un prefijo (o sufijo) para relacionarlo con el correspondiente componente padre.</li><li>En esta estructura de carpetas, prevalece el tipo de archivo por encima de la particular regla de negocio a la que concierne?</li><li>Es necesario que estén tan separados entre ellos, <code>Login.vue</code>, <code>FormLogin</code> y <code>useLogin.ts</code>, respectivamente? Qué sucederá cuando la aplicación empiece a escalar con más archivos y más módulos?</li></ul><p>A continuación, exploremos alternativas que pueden ser adoptadas para intentar lograr una estructura de carpetas más cómoda, flexible y escalable.</p>',10)]))}const v=o(l,[["render",p]]);export{h as __pageData,v as default};
