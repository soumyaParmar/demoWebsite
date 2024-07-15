import Footer from '@/app/_common/Footer/Footer'
import Navbar from '@/app/_common/Navbar/Navbar'
import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <section>
        <Navbar flag = {false} motionValue = {false}/>
        {children}
        <Footer/>
    </section>
  )
}

export default Layout