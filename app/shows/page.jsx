import { fetchAPIData } from "@/utils/requests"
import Link from "next/link"
import Shows from "@/components/Shows"

const ShowsPage = async () => {
  const { results } = await fetchAPIData("tv/popular")

  console.log(results)

  return (
    <section className="container">
      <h2>Popular TV Shows</h2>
      <div id="popular-shows" className="grid">
        {results.map((show) => (
          <Shows key={show.id} show={show} />
        ))}
      </div>
    </section>
  )
}

export default ShowsPage
