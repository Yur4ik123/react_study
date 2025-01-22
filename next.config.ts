import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js'
                }
            }
        }
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    eslint:{
        ignoreDuringBuilds: true
    }
};

export default nextConfig;
