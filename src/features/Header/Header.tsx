import React from 'react'
import Link from 'next/link'
import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <Link href='/'>
        <h1 className={s.title}>ARMAGEDDON 2023</h1>
      </Link>
      <p className={s.subtitle}>
        ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.
      </p>
    </header>
  )
}
