const { PHASE_PRODUCTION_BUILD } = require('next/constants')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer({
    distDir: 'ali',
    env: {
      myName: phase === PHASE_PRODUCTION_BUILD ? 'Ali Mousavi' : 'Mahsa Mousavi'
    }
  })
}
