import { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const images = import.meta.glob('./images/*.jpg', {
  eager: true,
  import: 'default',
})

function App() {
  const [imageList, setImageList] = useState<string[]>([])

  useEffect(() => {
    const paths = Object.values(images) as string[]
    setImageList(paths)
  }, [])

  return (
    <div>
      {/* Container 1 */}
      <Container 
        disableGutters 
        maxWidth={false} 
        sx={{ 
          height: '100dvh', 
          width: '100dvw', 
          margin: 0, 
          padding: 0,
          backgroundColor: 'white',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}
      >
        <h1>Cauã Bittencourt</h1>

        <Box 
          sx={{ 
            bgcolor: '#99582a', 
            backgroundImage: 'url(https://www.transparenttextures.com/patterns/cartographer.png)',
            height: '75%', 
            width: '75%',
            margin: '0',
            padding: '0',

            borderRadius: '1rem',

            overflow: 'scroll'
          }}
        >
          <ImageList 
            variant="masonry" 
            cols={3} 
            gap={7}
            sx={{
              margin: 0,
              scrollBehavior: 'smooth'
            }}
          >
            {imageList.map((src, idx) => (
              <ImageListItem 
                key={idx}
              >
                <img
                  srcSet={`${src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${src}?w=248&fit=crop&auto=format`}
                  alt={`Imagem ${idx + 1}`}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>

      {/* Container 2 */}
      <Container 
        disableGutters 
        maxWidth={false} 
        sx={{ 
          height: '100dvh', 
          width: '100dvw', 
          margin: 0, 
          padding: 0,
          backgroundColor: 'white',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}
      >
        <h1>Projects</h1>

        <Box 
          sx={{ 
            bgcolor: '#cfe8fc', 
            height: '75%', 
            width: '75%',

            borderRadius: '1rem'
          }}
        >
          {/* Seus componentes internos */}
        </Box>
      </Container>

      {/* Container 3 */}
      <Container 
        disableGutters 
        maxWidth={false} 
        sx={{ 
          height: '100dvh', 
          width: '100dvw', 
          margin: 0, 
          padding: 0,
          backgroundColor: 'white',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}
      >
        <h1>Ask About Me</h1>

        <Box 
          sx={{ 
            bgcolor: '#cfe8fc', 
            height: '75%', 
            width: '75%',

            borderRadius: '1rem'
          }}
        >
          {/* Seus componentes internos */}
        </Box>
      </Container>
    </div>
  );
}

export default App;
