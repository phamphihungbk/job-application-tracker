const fixModuleAlias = require('module-alias');

let folder = process.env.APP_ENV === 'production' ? 'dist' : '';

fixModuleAlias.addAliases({
    '@base': __dirname + '/' + folder,
    '@utils': __dirname + '/' + folder + '/utils',
});
