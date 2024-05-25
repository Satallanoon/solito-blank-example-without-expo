const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// Find the project and workspace directories
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const defaultConfig = getDefaultConfig(projectRoot);

const config = {
  resolver: {
    // 2. Let Metro know where to resolve packages and in what order
    nodeModulesPaths: [
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(workspaceRoot, 'node_modules'),
    ],
    // 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
    disableHierarchicalLookup: true,
  },
  // 1. Watch all files within the monorepo
  watchFolders: [workspaceRoot],
};

module.exports = mergeConfig(defaultConfig, config);
