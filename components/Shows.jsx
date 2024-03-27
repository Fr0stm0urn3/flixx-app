"use client"

import noImage from "@/assets/images/no-image (1).jpg"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const Shows = () => {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const res = await fetch(
          `${process.env.API_URL}tv/popular?api_key=${process.env.API_KEY}&language=en-US`
        )

        if (!res.ok) {
          console.log("Failed to fetch data")
          return
        }

        const data = await res.json()
        setShows(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchShows()
  }, [])

  return shows.map((show) => (
    <div key={show.id} className="card">
      <Link href={`/shows/${show.id}`}>
        <Image
          src={`${
            show.poster_path
              ? "https://image.tmdb.org/t/p/w500" + show.poster_path
              : noImage
          }`}
          className="card-img-top image-cover"
          alt={show.original_name}
          width={500}
          height={500}
          sizes="auto"
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{show.original_name}</h5>
        <p className="card-text">
          <small className="text-muted">Air Date: {show.first_air_date}</small>
        </p>
      </div>
    </div>
  ))
}

export default Shows
