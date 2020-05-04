export interface userData {
    name: string;
    id: string;
    displayName: string
}

export function get(): Promise<userData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // some asynchronous request to BE
            const data: userData = {
                name: 'david',
                id: '007',
                displayName: 'Digger'
            }

            if (data) {
                resolve(data);
            } else {
                reject(new Error('Request for User Data failed'));
            }

        }, 500);
    });
}