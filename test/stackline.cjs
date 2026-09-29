var assert=require('assert'),path=require('path'),grunt=require('grunt');
var root=process.env.STACKLINE_TEST_PACKAGE || path.resolve(__dirname,'..');
require(path.join(root,'tasks/exec.js'))(grunt);
var captured=false;
grunt.initConfig({exec:{probe:{cmd:'node -e "process.stdout.write(\'packed-ok\')"',callback:function(error,stdout){assert.ifError(error);assert.strictEqual(stdout,'packed-ok');captured=true;}}}});
grunt.tasks(['exec:probe'],{gruntfile:false},function(){assert(captured,'plugin callback executed');console.log('Packed Grunt exec command and callback passed');});
process.on('exit',function(){assert(captured,'command must complete');});
