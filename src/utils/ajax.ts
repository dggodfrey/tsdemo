export function get() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // some asynchronous request to BE
            const data = {
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