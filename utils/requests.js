export const fetchAPIData = async (endpoint) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}${endpoint}?api_key=${process.env.API_KEY}&language=en-US`
    )

    if (!res.ok) {
      console.log("Failed to fetch data")
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}
