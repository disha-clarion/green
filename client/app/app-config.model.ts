export interface IAppConfig {
    production: boolean;
    app: {
        title: string,
        wrArTitle: string
    },
    env: {
        name: string;
        api: string;
    };
    appInsights: {
        instrumentationKey: string;
    };
}
