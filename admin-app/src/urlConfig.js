const baseUrl = 'http://localhost:2000/api';

export const api = `${baseUrl}/api`;

export const generatePunlicUrl = (fileName) => {
    return `${baseUrl}/public/${fileName}`;
}