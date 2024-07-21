import { Header } from '../../Components/Header/Header'
import { Carousel } from "../../Components/Carousel/Carousel"
import { SectionCard } from "../../Components/SectionCard/SectionCard"
import { Section } from "../../Components/Section/Section"
import { ProductCard } from "../../Components/ProductCard/ProductCard"
import { SectionOfert } from "../../Components/SectionOfert/SectionOfert"
import { Footer } from "../../Components/Footer/Footer"


export function HomePage() {
    return (
        <>
        <Header/>
        <Carousel/>
        <Section/>
        <SectionCard/>
        <ProductCard/>
        <SectionOfert/>
        <Footer/>
        </>
    )
}