

/**
 * @param {Object} grunt Grunt.
 */
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.initConfig({
    imagemin: {
      main: {
        files: [{
          expand: true,
          cwd: 'Source/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'Runtime/'
        }]
      }
    }
  });

  grunt.registerTask('test', ['newer:imagemin:main']);
  grunt.registerTask('default', 'test');
};
