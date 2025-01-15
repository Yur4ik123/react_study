import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
    webpack(config, options) {
        config.module.rules.push({
            loader: '@svgr/webpack',
            issuer: /\.[jt]sx?$/,
            options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                    plugins: [{
                        name: 'preset-default',
                        params: {
                            override: {
                                removeViewBox: false
                            }
                        }
                    }],
                },
                titleProp: true,
            },
            test: /\.svg$/,
        });

        return config;
    },
};

export default nextConfig;
