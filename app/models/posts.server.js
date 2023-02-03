export async function getPosts() {
  const response = await fetch(`${process.env.API_URL}/posts?populate=image`);
  const result = response.json();
  return await result;
}

export async function getPost(url) {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
  );
  const result = response.json();
  return await result;
}
