export class Utils {
    static getProximoId(prefixo = '') {
        let maxId = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const chave = localStorage.key(i);
            if (chave.startsWith(prefixo)) {
                const idNum = parseInt(chave.replace(prefixo, ''));
                if (!isNaN(idNum)) {
                    maxId = Math.max(maxId, idNum);
                }
            }
        }
        return prefixo + (maxId + 1);
    }
}