module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        clean: {
            analysis: ['reports/analysis/**/*.*'],
            coverage: ['reports/coverage/**/*.*'],
            doc: ['doc/**/*.*'],
            reports: ['reports/tap/**/*.*']
        },
        jasmine: {
            all: {
                src: [
                    'src/**/*.js',
                ],
                options: {
                    'vendor': 'src/libs/**/*.js',
                    'specs': 'test/**/*.js'
                }
            },
            istanbul: {
                src: '<%= jasmine.all.src %>',
                options: {
                    vendor: '<%= jasmine.all.options.vendor %>',
                    specs: '<%= jasmine.all.options.specs %>',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'reports/coverage/json/coverage.json',
                        report: [
                            {type: 'html', options: {dir: 'reports/coverage/html'}},
                            {type: 'text-summary'}
                        ]
                    }
                }
            }
        },
        jshint: {
            options: {
                force: true,
                jshintrc: true,
                reporter: require('jshint-stylish')
            },
            all: ['src/**/*.js', 'test/**/*.js']
        },
        jsdoc: {
            dist : {
                src: ['src/**/*.js'],
                jsdoc: './node_modules/.bin/jsdoc',
                options: {
                    destination: 'doc/api',
                    configure: './node_modules/grunt-jsdoc/node_modules/jsdoc/conf.json',
                    template: './node_modules/grunt-jsdoc/node_modules/ink-docstrap/template'
                }
            }
        },
        cucumberjs: {
            src: 'test/features',
            options: {
                steps: 'test/features/steps',
                format: 'pretty'
            }
        },
        testem : {
            env: {
                src: ['src/**/*.js', 'test/**/*.js'],
                report_file: 'reports/tap/report.tap',
                options: {
                    reporter: 'tap',
                    launch_in_dev: ['Chrome'],
                    launch_in_ci: ['PhantomJS', 'Firefox', 'Chrome']
                }
            }
        },
        plato : {
            rep: {
                options: {
                },
                files: {
                    'reports/analysis': ['src/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-testem');
    grunt.loadNpmTasks('grunt-cucumber');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-plato');
    
    grunt.registerTask('analysis', ['clean:analysis', 'plato']);
    grunt.registerTask('coverage', ['clean:coverage', 'jasmine:istanbul']);
    grunt.registerTask('doc', ['clean:doc', 'jsdoc']);
    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('report', ['doc', 'analysis', 'coverage']);
    grunt.registerTask('test', ['jasmine:all']);

    grunt.registerTask('default', ['lint', 'test']);
};
