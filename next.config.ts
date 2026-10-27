import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // 사진은 NCP 에 크기별로 미리 만들어 올려 두므로 Vercel 이미지 최적화를 쓰지 않는다
    // (Hobby 플랜의 변환 한도·전송량을 아끼기 위함)
    unoptimized: true,
  },
};

export default nextConfig;
