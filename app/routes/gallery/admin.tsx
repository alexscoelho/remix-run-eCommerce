import { json } from "@remix-run/node";
import { Link, useLoaderData, Outlet } from "@remix-run/react";
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

export default function GalleryPost() {
  return (
    <main>
      <h1>Admin</h1>
      <div>
        <Outlet />
      </div>
    </main>
  );
}
