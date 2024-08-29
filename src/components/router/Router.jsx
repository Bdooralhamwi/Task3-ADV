import React from 'react'
import Hero from '../Hero'
import Appartment from '../Appartment/Appartment'
import Beast from '../Beast deal/Beast'
import Closer from '../Closer view/Closer'
import Products from "../products/Products"
import Contact from "../Contact/Contact"
import Animation from '../animation/Animation'
export default function ROuter() {
  return (
    <>
    <Animation/>
        <Hero />
        <Appartment />
        <Beast />
        <Closer />
        <Products />
        <Contact />
    </>
  )
}
