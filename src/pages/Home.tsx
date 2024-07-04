import React, { useEffect, useState, useCallback } from 'react'
import { PokemonCard } from '../@types/pokemon-types'
import { fetchCards, searchCards } from '../services/api'
import CardList from '../components/CardList'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import Loader from '../components/Loader'

const Home: React.FC = () => {
  const [cards, setCards] = useState<PokemonCard[]>([])
  const [searchedCards, setSearchedCards] = useState<PokemonCard[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchCards(currentPage)
      .then(cards => {
        setCards(cards)
        setLoading(false)
      })
  }, [currentPage])

  const goToNextPage = useCallback(() => setCurrentPage((prevPage) => prevPage + 1), [])
  const goToPreviousPage = useCallback(() => setCurrentPage((prevPage) => prevPage - 1), [])

  const handleSearch = async (searchTerm: string) => {
    try {
      setLoading(true)
      await searchCards(searchTerm)
        .then(results => {
          setSearchedCards(results)
          setLoading(false)
        })
    } catch (error) {
      console.error('Error searching for cards:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Loader />
      ) : (
        <CardList cards={searchedCards.length > 0 ? searchedCards : cards} {...{ goToNextPage }} />
      )}
      <div className="justify-between mb-4 mt-16 hidden lg:flex">
        <Button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button onClick={goToNextPage}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default Home
