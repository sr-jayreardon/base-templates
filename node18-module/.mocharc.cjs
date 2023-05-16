module.exports = {
  spec: ['test/unit/**/*.spec.js', 'test/unit/**/*.spec.cjs'],
  reporter: 'mocha-jenkins-reporter',
  reporterOptions: 'junit_report_path=./target/jenkins-test-results.xml',
  timeout: 30000,
  colors: true,
  exit: true
}
