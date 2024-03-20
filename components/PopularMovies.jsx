import Image from "next/image"
import { fetchAPIData } from "@/utils/requests"
import Link from "next/link"
import noImage from "@/assets/images/no-image (1).jpg"

const PopularMovies = async () => {
  const { results } = await fetchAPIData("/movie/popular")

  console.log(results)

  return (
    <section className="container">
      <h2>Popular Movies</h2>
      <div></div>
      <div className="grid">
        {results.map((movie) => (
          <section key={movie.id} className="container">
            <div className="grid">
              <div className="card">
                <Link href={`/movies/${movie.id}`}>
                  <Image
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : noImage
                    }
                    className="card-img-top image-cover"
                    alt={movie.title}
                    width={500}
                    height={500}
                    priority={true}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">Release: {movie.release_date}</small>
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default PopularMovies
