import React from "react"

import { Header } from "../../Components/Header/Header"
import { DescProduct } from "../../Components/DescProduct/DescProduct"
import { Footer } from "../../Components/Footer/Footer"
import { ProductCard } from "../../Components/ProductCard/ProductCard"

export function ProductViewPage() {
    return (
        <>
        <Header/>
        <DescProduct/>
        <ProductCard quantidadeProdutos={4}/>
        <Footer/>
        </>
    )
}