import { existsSync, unlinkSync } from 'fs';
import { join } from 'path';

export class FileHelper {
    public static deleteFileSilent(filepath: string): void {
        const fullPath = join(__dirname, '..', '..', `${process.env.STATIC_FOLDER}`, filepath);
        if (existsSync(fullPath)) {
            unlinkSync(fullPath);
        }
    }
}
