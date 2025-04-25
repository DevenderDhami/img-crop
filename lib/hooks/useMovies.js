import useApiFetch from './useApiFetch'

export const useMovies = () => {
    const { data: movies, loading, error } = useApiFetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/movies`)
    return { movies, loading, error }
}


export const useMovieById = (id) => {
    const { data: movie, loading, error } = useApiFetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/movies/${id}`)
    return { movie, loading, error }
}



