const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://localhost:5000", // 3000번 front에서 target을 5000번으로 설정하겠다.
            changeOrigin: true,
        })
    );
};
