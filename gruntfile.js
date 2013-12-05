

/**
 * @param {Object} grunt Grunt.
 */
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.initConfig({
    copy: {
      target: {
        files: [{
          expand: true,
          cwd: 'Source/',
          src: [
            '**',
            '!**/*.{png,jpg,gif}'
          ],
          dest: 'Runtime/'
        }]
      }
    },
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

  grunt.registerTask('test', ['newer:copy', 'newer:imagemin']);
  grunt.registerTask('default', 'test');
};
