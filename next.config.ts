import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // 사진 원본을 두는 NCP Object Storage
    remotePatterns: [{ protocol: "https", hostname: "kr.object.ncloudstorage.com", pathname: "/riha/**" }],
  },
};

export default nextConfig;
