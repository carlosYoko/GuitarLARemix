export async function getCourse() {
  const response = await fetch(`${process.env.API_URL}/course?populate=image`);
  const result = response.json();

  return await result;
}
