export async function productsFetcher(apiRouter) {
  const url = "https://fakestoreapi.com/" + apiRouter

  const options = {
    headers: {
      accept: "application/json",
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
