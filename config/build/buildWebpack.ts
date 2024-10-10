import { Configuration } from "webpack"
import { buildDevServer } from "./buildDevServer"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolvers } from "./buildResolvers"
import { BuildOptions } from "./types/types"

export function buildWebpack(options: BuildOptions): Configuration {
    const { mode, port, paths } = options;
    const isDev = mode === 'development';

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options).filter(Boolean)
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'eval-cheap-module-source-map' : 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined
    }
}