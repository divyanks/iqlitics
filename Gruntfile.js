module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		tag: {
			banner: '/*!\n' +
			' * <%= pkg.name %>\n' + 
			' * <%= pkg.version %>\n' +
			' * Copyright <%= pkg.copyright %>\n' + 
			' */\n'
		},
		project: {
			app: 'app',
			assets: 'public/assets',
			client: '<%= project.app %>/client',
			scss: '<%= project.app %>/stylesheets',
			css: '<%= project.assets %>/css'
		},
		sass: {
			dev: {
				options: {
					style: 'expanded',
					banner: '<%= tag.banner %>',
				},
				files: {
					'<%= project.css %>/custom.css': '<%= project.scss %>/custom/main.scss',
					'<%= project.css %>/bootstrap.css': '<%= project.scss %>/bootstrap/bootstrap.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'<%= project.css %>/custom.css': '<%= project.scss %>/custom/main.scss',
					'<%= project.css %>/bootstrap.css': '<%= project.scss %>/bootstrap/bootstrap.scss'
				}
			}
		},
		uglify: {
			options: {
				
			},
			dist: {
				files: {
					'<%= project.assets %>/js/client.min.js': 'public/assets/js/client.min.js',
					'<%= project.assets %>/js/navbar.min.js': '<%= project.client %>/navbar.js',
					'<%= project.assets %>/js/main.min.js': '<%= project.client %>/main.js',
					'<%= project.assets %>/js/donut.min.js': '<%= project.client %>/donut.js',
					'<%= project.assets %>/js/lineChart.min.js': '<%= project.client %>/lineChart.js',
					'<%= project.assets %>/js/barChart.min.js': '<%= project.client %>/barChart.js'
				}
			}
		},
		browserify: {
			dev: {
				files: {
					'<%= project.assets %>/js/client.min.js': '<%= project.client %>/app.js',
					'<%= project.assets %>/js/navbar.min.js': '<%= project.client %>/navbar.js',
					'<%= project.assets %>/js/main.min.js': '<%= project.client %>/main.js',
					'<%= project.assets %>/js/donut.min.js': '<%= project.client %>/donut.js',
					'<%= project.assets %>/js/lineChart.min.js': '<%= project.client %>/lineChart.js',
					'<%= project.assets %>/js/barChart.min.js': '<%= project.client %>/barChart.js'					
				}
			},
			dist: {
				files: {
					'<%= project.assets %>/js/client.min.js': '<%= project.client %>/app.js',
					'<%= project.assets %>/js/navbar.min.js': '<%= project.client %>/navbar.js',
					'<%= project.assets %>/js/main.min.js': '<%= project.client %>/main.js',
					'<%= project.assets %>/js/donut.min.js': '<%= project.client %>/donut.js',
					'<%= project.assets %>/js/lineChart.min.js': '<%= project.client %>/lineChart.js',
					'<%= project.assets %>/js/barChart.min.js': '<%= project.client %>/barChart.js'					
				}
			}
		},
		watch: {
			sass: {
				files: '<%= project.scss %>/**/*.scss',
				tasks: ['sass:dev']
			},
			browserify: {
				files: '<%= project.client %>/**/*.js',
				tasks: ['browserify:dev']
			}
		},
  	notify_hooks: {
    	options: {
      	enabled: true,
      	max_jshint_notifications: 5, // maximum number of notifications from jshint output 
      	title: "iQlitics Build", // defaults to the name in package.json, or will use project directory's name 
      	success: true, // whether successful grunt executions should be notified automatically 
      	duration: 3 // the duration of notification in seconds, for `notify-send only 
    	}
  	}
	});
	
	/**
	 * Load Grunt plugins
	 */
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
	
	grunt.registerTask('default', ['sass:dev', 'browserify:dev', 'watch']);
	grunt.registerTask('dist', ['sass:dist', 'browserify:dist','uglify:dist']);
	grunt.task.run('notify_hooks');
};
