module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    // Grunt Tasks
    grunt.initConfig({
        paths: {
            test: 'test',
            js: 'js',
            sass: 'sass'
        },

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            // TASKS RUNNERS
            common: {
                files: [
                    // changes to Gruntfile.js will trigger the watch task to restart, and reload the Gruntfile.js changes
                    'Gruntfile.js'
                ]
            },
            test: {
                files: [
                    /*---LIBRARY LEVEL---*/
                    // Sass
                    '<%= paths.sass %>/**/*.scss',
                    // JS
                    '<%= paths.js %>/dist/**/*.js',
                    /*---TESTS LEVEL---*/
                    // Sass
                    '<%= paths.test %>/sass/**/*.scss',
                    // JS
                    '<%= paths.test %>/jasmine/**/*.js'
                ],
                tasks: ['test']
            },
            js: {
                files: [
                    /*---LIBRARY LEVEL---*/
                    // JS
                    '<%= paths.js %>/src/**/*.js'
                ],
                tasks: ['uglify:dist']
            }
        },

        jasmine: {
            src: '<%= paths.js %>/dist/*.js',
            options: {
                vendor: [
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/angular/angular.min.js'
                ],
                helpers: '<%= paths.test %>/jasmine/helpers/**/*.js',
                styles: '<%= paths.test %>/css/**/*.css',
                specs: '<%= paths.test %>/jasmine/specs/**/*.js',
                outfile: 'node_modules/grunt-contrib-jasmine/_SpecRunner.html'
            }
        },

        sass: {
            test: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.test %>/sass',
                    src: ['**/*.scss'],
                    dest: '<%= paths.test %>/css',
                    ext: '.css'
                }]
            }
        },

        uglify: {
            options: {
                banner: '' +
                '//! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '//! author : Sergey Gospodarets\n' +
                '//! license : MIT\n' +
                '//! https://github.com/malyw/sass-to-js\n'
            },
            dist: {
                files: {
                    '<%= paths.js %>/dist/sass-to-js.min.js': ['<%= paths.js %>/src/sass-to-js.js']
                }
            }
        }
    });

    // Composite Tasks
    grunt.registerTask('test', [
        'sass:test',
        'jasmine'
    ]);

    grunt.registerTask('build', [
        'uglify:dist',
        'test'
    ]);

    grunt.registerTask('default', [
        'build',
        'watch'
    ]);
};