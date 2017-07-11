
module.exports = function(grunt){
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //uglify 설정
        // uglify: {
        //     options: {
        //         banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> / ' //파일의 맨처음 붙는 banner 설정
        //     },
        //     build: {
        //         src: 'public/account/controller.js',
        //         dest: 'public/account/result.min.js'
        //     }
        // },
        //concat 설정
        concat:{
            basic: {
                src:['public/route.js',
                     'public/account/controller.js',
                     'public/feedlist/controller.js',
                     'public/header/controller.js',
                     'public/login/controller.js',
                     'public/login/loginSuccessController.js',
                     'public/reservation/controller.js',
                     'public/reservationSuccess/controller.js'
                ], //concat 타겟 설정(순서대로 concat~ ^^!!!! )
                dest: 'public/build/result.js' //concat 결과 파일
            }
        }
   });

    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', [/*'uglify',*/ 'concat'])

};