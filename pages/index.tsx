import type { NextPage } from 'next'
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/atoms/organisms/Navbar';
import MainBanner from '../components/atoms/organisms/MainBanner';
import TransactionStep from '../components/atoms/organisms/TransactionStep';
import FeaturedGame from '../components/atoms/organisms/FeaturedGame';
import Reached from '../components/atoms/organisms/Reached';
import Story from '../components/atoms/organisms/Story';
import Footer from '../components/atoms/organisms/Footer';


const Home: NextPage = () => {
  useEffect(() => {
    AOS.init()
  }, []);
  
  return (
    <>
    <Navbar/>
    <MainBanner/>
    <TransactionStep/>
    <FeaturedGame/>
    <Reached/>
    <Story/>
    <Footer/>
    </>
  )
}

export default Home
