module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['src/core/scss/*.scss',
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
          } 
      ]
      }
    },
    cssmin:{
      target_core:{
        src:'src/core/style.css',
        dest:"src/core/style.min.css"
      },
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