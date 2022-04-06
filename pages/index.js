import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export const getServerSideProps = async () => {
  const resp = await fetch('https://raw.githubusercontent.com/jherr/pokemon/main/index.json')

  return {
    props: {
      pokemon: await resp.json(),
    }
  }
}

const Home = ({ pokemon }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <h2>Pokemon List</h2>
      <div className={styles.grid}>
        {pokemon.map((poke) => (
          <div className={styles.card} key={poke.id}>
            <Link href={`/pokemon/${poke.id}`}>
              <a>
                <img src={`https://raw.githubusercontent.com/jherr/pokemon/main/${poke.image}`} alt={poke.name} />
                <h3>{poke.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home