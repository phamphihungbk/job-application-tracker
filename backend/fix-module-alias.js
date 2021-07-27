const fixModuleAlias = require('module-alias');

let folder = '';

if (process.env.APP_ENV == 'production') {
    folder = 'dist';
} else {
    folder = 'src';
}

fixModuleAlias.addAliases({
    '@base': __dirname + '/' + folder,
});
