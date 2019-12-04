module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['src/core/scss/*.scss',
        //'src/gf/scss/*.scss', 'src/jnp/scss/*.scss', 
       // 'src/core/js/*.js', 
        //'src/gf/js/*.js', 'src/jnp/js/*.js'
      ],
        tasks: ['sass', 'cssmin']
      },
      // uglify:{
      //   files: ['src/core/*.js'
      //   //,'src/gf/*.js','src/jnp/*.js'
      // ],
      //   tasks: ['concat', 'uglify']
      // }
    },
   // concat:{
      // css_gf:{
      //   src: [
      //   'src/gf/style.css',
      //   'src/core/style.css'],
      // dest: 'src/gf/style.css'},
      // csss_jnp:{
      //   src: [
      //   'src/jnp/style.css',
      //   'src/core/style.css'],
      // dest: 'src/jnp/style.css'},
      // js_core:{
      //   src:['src/core/js/*.js'],
      //   dest:'src/core/script.js'
      // }
      // js_gf:{
      //   src:['src/core/js/*.js','src/gf/js/*.js'],
      //   dest:'src/gf/script.js'
      // },
      // js_jnp:{
      //   src:['src/core/js/*.js','src/jnp/js/*.js'],
      //   dest:'src/jnp/script.js'
      // }

   // },
    sass: {
      build:{
         files: [
          {
          src: 'src/core/scss/style.scss',
         dest: 'src/core/style.css'
          } // ,
        // {
        //   src: 'src/gf/scss/style.scss',
        //   dest: 'src/gf/style.css'
        // },
        // {
        //   src: 'src/jnp/scss/style.scss',
        //   dest: 'src/jnp/style.css'
        // }
      ]
      }
    },
    cssmin:{
      target_core:{
        src:'src/core/style.css',
        dest:"src/core/style.min.css"
      },
      target_gf:{
        src:'src/gf/style.css',
        dest:"src/gf/style.min.css"
      },     target_jnp:{
        src:'src/jnp/style.css',
        dest:"src/jnp/style.min.css"
      }
    },
    // uglify:{
    //   target:{
    //     files:[{
    //       src: "src/core/script.js",
    //       dest: "src/core/script.min.js" 
    //     }],
    //     files_gf:[{
    //       src: "src/gf/script.js",
    //       dest: "src/gf/script.min.js" 
    //     }],
    //     files_jnp:[{
    //       src: "src/core/script.js",
    //       dest: "src/core/script.min.js" 
    //     }]
    //   }
    // }

  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.registerTask('default', ['watch'])
}