// 项目名称: A simple school project
// 版本号: 1.0

import { Logger } from 'winston';

const logger = new Logger('info');

async function main() {
    try {
        const result = await someAsyncOperation();
        logger.info(`Result: ${result}`);
    } catch (error) {
        logger.error('An error occurred:', error);
    }
}

main();
