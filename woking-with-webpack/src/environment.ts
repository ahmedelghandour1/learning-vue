const env: string =  process.env.NODE_ENV;

const environment: any = {
    production: {
        api: '',
        url: ''
    },
    development: {
        api: '',
        url: ''
    }
};

export default environment[env];