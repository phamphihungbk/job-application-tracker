interface ISettings {
  title: string
  errorLog: string[]
}

const settings: ISettings = {
  title: 'Job Application Tracker',
  errorLog: ['production']
}

export default settings
