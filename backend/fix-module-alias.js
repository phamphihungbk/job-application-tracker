const fixModuleAlias = require('module-alias');

let folder = process.env.APP_ENV === 'prod' ? 'dist' : '';

fixModuleAlias.addAliases({
    '@base': __dirname + '/' + folder,
});
