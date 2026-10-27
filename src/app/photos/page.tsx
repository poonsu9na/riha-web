import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PhotoGrid from "@/components/photos/PhotoGrid";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "사진",
};

export default function PhotosPage() {
  return (
    <>
      <PageIntro eyebrow="02 — 보기" title="찍은 것들" description="설명도 날짜도 없이, 찍은 걸 그냥 올려 둡니다." />
      <PhotoGrid photos={photos} />
    </>
  );
}
