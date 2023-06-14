"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://localhost:4200'
    ],
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors(corsOptions);
    await app.listen(8800);
}
bootstrap();
//# sourceMappingURL=main.js.map