export async function getGuitars() {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
  const result = response.json();
  return await result;
}

export async function getGuitar(url) {
  const response = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );
  const result = response.json();
  return await result;
}
