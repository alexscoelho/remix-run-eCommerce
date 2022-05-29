import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getGalleryImage } from "~/models/galleryImages.server";

type Image = {
  createdAt: string;
  id: string;
  url: string;
  approxReducedSize: string;
  updatedAt: string;
};

type LoaderData = {
  galleryImage: Image;
};

export const loader: LoaderFunction = async ({ params }) => {
  return json<LoaderData>({
    galleryImage: await getGalleryImage(params.id),
  });
};

export default function Gallery() {
  const { galleryImage } = useLoaderData() as LoaderData;
  return (
    <main>
      <h1>Your Image</h1>
      <a href={galleryImage.url}>{galleryImage.url}</a>
    </main>
  );
}
