let appConfig = {};
appConfig.port = 3000;
appConfig.allowedCorsOrigin="*";
appConfig.env = "dev";
appConfig.db = {
    uri:'mongodb://localhost/ChatDB'
}
appConfig.apiVersion = '/api/v2';

module.exports = {
    port:appConfig.port,
    allowedCorsOrigin:appConfig.allowedCorsOrigin,
    environment:appConfig.env,
    db:appConfig.db,
    apiVersion:appConfig.apiVersion
};