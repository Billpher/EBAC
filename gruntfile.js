module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main2.css': 'main.scss' 
                }
            }
        },
        concurrent: {
            target: ['less', 'sass']
        }
    })

    grunt.registerTask('Ola', function() {
        const done = this.async();
        setTimeout(function() {
            console.log('ola')
            done();
        },3000)
    })

    grunt.registerTask('default', ['concurrent']);
}