module.exports = function(grunt){
  grunt.initConfig({
    uglify:{
      'dist/index.js':'index.js'
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['uglify']);


};
