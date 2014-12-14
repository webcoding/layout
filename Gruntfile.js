// Define our grunt file
module.exports = function (grunt) {
  // Configure the spritesheet
  grunt.initConfig({
    sprite: {
      'top-down': {
        src: ['docs/small.png', 'docs/wide.png', 'docs/tall.png'],
        destImg: 'docs/top-down.png',
        destCSS: 'docs/top-down.css',
        algorithm: 'top-down'
      },
      'left-right': {
        src: ['docs/small.png', 'docs/wide.png', 'docs/tall.png'],
        destImg: 'docs/left-right.png',
        destCSS: 'docs/left-right.css',
        algorithm: 'left-right'
      },
      'diagonal': {
        src: ['docs/small.png', 'docs/wide.png', 'docs/tall.png'],
        destImg: 'docs/diagonal.png',
        destCSS: 'docs/diagonal.css',
        algorithm: 'diagonal'
      },
      'alt-diagonal': {
        src: ['docs/small.png', 'docs/wide.png', 'docs/tall.png'],
        destImg: 'docs/alt-diagonal.png',
        destCSS: 'docs/alt-diagonal.css',
        algorithm: 'alt-diagonal'
      },
      'binary-tree': {
        src: ['docs/small.png', 'docs/wide.png', 'docs/tall.png'],
        destImg: 'docs/binary-tree.png',
        destCSS: 'docs/binary-tree.css',
        algorithm: 'binary-tree'
      },
    }
  });

  // Load in grunt-spritesmith
  grunt.loadTasks('grunt-spritesmith');

  // Run the sprite task by default
  grunt.registerTask('default', ['sprite']);
};