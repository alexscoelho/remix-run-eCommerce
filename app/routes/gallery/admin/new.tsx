import { useState } from "react";

export default function GalleryUploadRoute() {
  const [galleryImage, setGalleryImage] = useState<File>();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;
    setGalleryImage(fileList[0]);
  };
  const handleImageUpload = (event: any) => {
    event.preventDefault();
    if (galleryImage) {
      const formData = new FormData();
      formData.append("myFile", galleryImage, galleryImage.name);
      fetch(
        `https://v1nfb401d7.execute-api.us-east-1.amazonaws.com/dev/alex-thumbnails/${galleryImage?.name}`,
        {
          method: "PUT",
          body: formData,
          headers: {
            "Content-Type": "image/png",
          },
        }
      ).catch((error) => {
        console.error(error);
      });
    }
  };
  return (
    <form onSubmit={handleImageUpload}>
      <label htmlFor='gallery-image'>Avatar</label>
      <input
        id='gallery-image'
        type='file'
        name='gallery-image'
        onChange={handleImageChange}
      />
      <button type='submit'>Upload</button>
    </form>
  );
}
