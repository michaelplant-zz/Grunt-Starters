module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'ftp-deploy': {
      build: {
        auth: {
          host: 'domain.com',
          port: 21,
          authKey: 'key1'
        },
        src: 'path/to/folder',
        dest: '/server/path/to/folder'
      }
    },
    'watch': {
      scripts: {
        files: ['folder/**/*'],
        tasks: ['ftp-deploy'],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
