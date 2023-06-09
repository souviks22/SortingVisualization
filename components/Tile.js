import { useContext } from 'react'
import { ModeContext } from '@/store/mode-context'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'
import styles from './Tile.module.css'

const Tile = ({ name, description, href }) => {
  const { isDarkMode } = useContext(ModeContext)
  return (<Link href={href} className={`${styles.tile} w-1/5 text-lg p-3 ${isDarkMode && styles.tile_dark}`}>
    <section className='flex py-2'>
      <h2>{name}</h2>
      <AiOutlineArrowRight className={`${styles.arrow} mx-3`} />
    </section >
    <section className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{description}</section>
  </Link >)
}

export default Tile