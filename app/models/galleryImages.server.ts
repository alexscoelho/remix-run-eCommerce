export async function getGalleryImages() {
  const res = await fetch(
    "https://v1nfb401d7.execute-api.us-east-1.amazonaws.com/dev/images/all"
  ).then((res) => res.json());

  return res;
}

export async function getGalleryImage(id: string | undefined) {
  const res = await fetch(
    `https://v1nfb401d7.execute-api.us-east-1.amazonaws.com/dev/images/get/${id}`
  ).then((res) => res.json());

  return res;
}
