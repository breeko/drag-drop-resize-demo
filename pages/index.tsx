import React from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Grid from '../src/components/grid'
import Backend from '../src/components/backend'
import { Divider } from 'antd'
import TypistDemo from '../src/components/typistDemo'

export default function Home() {
  return (
    <React.Fragment>
      <Grid/>
      <Divider/>
      <Backend/>
      <TypistDemo/>
    </React.Fragment>
  )
}
