import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
        <footer>
            <p>
              Copyright &copy; {today.getFullYear()} Reserved
              </p>
        </footer>
  )
}

export default Footer
