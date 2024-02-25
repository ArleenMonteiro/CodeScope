export const metadata = {
  title: 'revuc'
};

import StyledJsxRegistry from './registry'
 
export default function RootLayout({ chiln }) {
  return (
    <html lang='en'>
      <body>
        <StyledJsxRegistry>
          {chiln}
        </StyledJsxRegistry>
      </body>
    </html>
  )
};
