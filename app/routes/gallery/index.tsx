import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getGalleryImages } from "~/models/galleryImages.server";

type Image = {
  createdAt: string;
  id: string;
  url: string;
  approxReducedSize: string;
  updatedAt: string;
};

type LoaderData = {
  galleryImages: Array<Image>;
};

export const loader = async () => {
  return json<LoaderData>({
    galleryImages: await getGalleryImages(),
  });
};

export default function Gallery() {
  const { galleryImages } = useLoaderData() as LoaderData;
  return (
    <main>
      <h1>Image Gallery</h1>
      <ul>
        {galleryImages?.map(({ id, url }) => (
          <li key={id}>
            <Link to={id}>{url}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
