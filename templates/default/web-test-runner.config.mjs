import { playwrightLauncher } from '@web/test-runner-playwright';
import { serverPlugins } from '@muons/library/scripts/rollup-plugins.mjs';
import { checkRunSnapshots } from '@muons/library/tests/runner/commands.mjs';

export default {
  testRunnerHtml: (testFramework) =>
    `<html>
      <head>
        <script type="module">
          import '@webcomponents/scoped-custom-element-registry';
        </script>
      </head>
      <body>
        <script>window.process = { env: { NODE_ENV: "development" } }</script>
        <script type="module" src="${testFramework}"></script>
      </body>
    </html>`,
  nodeResolve: true,
  mimeTypes: {
    '**/*.css': 'js'
  },
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'firefox' }),
    playwrightLauncher({ product: 'webkit' })
  ],
  browserStartTimeout: 30000, // default 30000
  testsStartTimeout: 20000, // default 10000
  testsFinishTimeout: 60000, // default 20000
  concurrentBrowsers: 2,
  concurrency: 2,
  plugins: [
    ...serverPlugins,
    checkRunSnapshots()
  ],
  coverageConfig: {
    threshold: {
      statements: 99,
      branches: 99,
      functions: 99,
      lines: 99
    }
  }
};