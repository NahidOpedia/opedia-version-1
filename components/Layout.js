
import dynamic from 'next/dynamic'

const Footer = dynamic(
  () => import('./Footer'),
  { loading: () => <p>Loading...</p> }
)

export default function Layout({ children }) {
  return (
    <>
         <main>{children}</main>
      <Footer />
    </>
  );
}
