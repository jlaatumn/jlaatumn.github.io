import { Provider } from "@/components/ui/provider"

import { Box, Container } from '@chakra-ui/react'
import Navbar from '../components/navbar';


export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
        
      </body>
    </html>
  );
}







// import { ChakraProvider } from '@chakra-ui/react';
// // import Navbar from '../components/navbar.js';

// export default function Layout({ children }) {
//   return (
//     <ChakraProvider>
//       <Provider>{children}</Provider>
//     </ChakraProvider>
//   );
// }




