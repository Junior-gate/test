'use client'
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from 'react'
import { LayoutProps } from '../Layout/Layout'
import { AsteroidData, ResponseData } from '@/shared/interfaces/interfaces'

type ContextProps = {
  cartItems: AsteroidData[]
  setCartItems?: Dispatch<SetStateAction<AsteroidData[]>>

  asteroidData: AsteroidData[]
  setAsteroidData: Dispatch<SetStateAction<AsteroidData[]>>

  cartItemsId: string[]
  setCartItemsId?: Dispatch<SetStateAction<string>>

  distanceOption: string

  setDistanceOption: Dispatch<SetStateAction<string>>
  addToCart: (productId: string) => void
}

const GlobalContext = createContext<ContextProps>({
  cartItems: [],
  setCartItems: (): AsteroidData[] => [],

  asteroidData: [],
  setAsteroidData: (): AsteroidData[] => [],

  cartItemsId: [],
  setCartItemsId: (): string => '',

  distanceOption: '',

  setDistanceOption: (): string => '',
  addToCart: (productId: string) => productId,
})

export const GlobalContextProvider = ({ children }: LayoutProps) => {
  const [distanceOption, setDistanceOption] = useState('distancesInKm')
  const [cartItems, setCartItems] = useState<AsteroidData[]>([])
  const [cartItemsId, setCartItemsId] = useState<string[]>([])
  const [asteroidData, setAsteroidData] = useState<AsteroidData[]>([])

  const addToCart = (productId: string) => {
    if (!cartItemsId.includes(productId))
      setCartItemsId([...cartItemsId, productId])
  }

  useEffect(() => {
    const filtered = asteroidData?.filter((asteroid: AsteroidData) => {
      return cartItemsId.includes(asteroid.id)
    })
    setCartItems(filtered)
  }, [asteroidData, cartItemsId])

  return (
    <GlobalContext.Provider
      value={{
        asteroidData,
        setAsteroidData,
        distanceOption,
        setDistanceOption,
        addToCart,
        cartItemsId,
        cartItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
