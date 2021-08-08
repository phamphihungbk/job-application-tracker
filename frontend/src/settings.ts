interface ISettings {
  title: string,
  errorLog: string[],
  apiEndpoint: string,
  apiTimeout: number
}
// TODO: load config dynamically from env file
const settings: ISettings = {
  title: 'Job Application Tracker',
  errorLog: ['production'],
  apiEndpoint: 'http://api.jobtracker.local/v1',
  apiTimeout: 5000
}

export default settings
