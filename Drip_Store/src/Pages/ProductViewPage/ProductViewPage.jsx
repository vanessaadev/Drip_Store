import React from "react"
import { DescProduct } from "../../Components/DescProduct/DescProduct"
import { ProductCard } from "../../Components/ProductCard/ProductCard"
import Layout from "../Layout/Layout"

export function ProductViewPage() {
    return (
        <>
            <Layout>
                <DescProduct />
                <ProductCard quantidadeProdutos={4} />
            </Layout>
        </>
    )
}