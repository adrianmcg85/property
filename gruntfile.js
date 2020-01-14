module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['src/core/scss/*.scss',
        'src/core/scss/**/*.scss',
        'src/jnp/scss/*.scss',
        'src/jnp/scss/**/*.scss',
        'src/gf/scss/*.scss',
        'src/gf/scss/**/*.scss',
        'src/exp/scss/*.scss',
        'src/exp/scss/**/*.scss'
      ],
        tasks: ['sass', 'cssmin']
      },
    },
    sass: {
      build:{
         files: [
          {
          src: 'src/core/scss/style.scss',
         dest: 'src/core/style.css'
          } ,
          {
            src: 'src/jnp/scss/style.scss',
           dest: 'src/jnp/style.css'
            },
            {
              src: 'src/gf/scss/style.scss',
             dest: 'src/gf/style.css'
              },
              {
                src: 'src/exp/scss/style.scss',
               dest: 'src/exp/style.css'
                }
      ]
      }
    },
    cssmin:{
      target_core:{
        src:'src/core/style.css',
        dest:"src/core/style.min.css"
      },
      target_jnp:{
        src:'src/jnp/style.css',
        dest:"src/jnp/style.min.css"
      },
      target_gf:{
        src:'src/gf/style.css',
        dest:"src/gf/style.min.css"
      },
      target_exp:{
        src:'src/exp/style.css',
        dest:"src/exp/style.min.css"
      }
    },
    uglify:{
      target:{
        files:[{
          src: "src/core/script.js",
          dest: "src/core/script.min.js" 
        }]
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.registerTask('default', ['watch'])
}