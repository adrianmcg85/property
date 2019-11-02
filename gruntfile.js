module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['src/core/scss/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },
    sass: {
      build:{
        files: [{
          src: 'src/core/scss/style.scss',
         dest: 'src/core/style.css'
        }]
      }
    },
    cssmin:{
      target:{
        src:'src/core/style.css',
        dest:"src/core/style.min.css"
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['watch', 'cssmin'])
}