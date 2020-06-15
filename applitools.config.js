module.exports = {
  concurrency: 10,
  apiKey: process.env.APPLITOOLS_API_KEY,
  browser: [
    { width: 375, height: 667, name: 'safari' }, // iPhone
    { width: 411, height: 731, name: 'chrome' } // Android
  ],
  batchName: 'Content Tests',
  batchId: process.env.APPLITOOLS_BATCH_ID
}
