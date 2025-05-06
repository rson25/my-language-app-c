import { useState } from 'react';
import { Container, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import Navbar from '../components/Navbar';
import { VocabularyWord } from '../types/language';

export default function Pronunciation() {
  const [currentWord, setCurrentWord] = useState<VocabularyWord>({
    id: '1',
    word: 'Hello',
    translation: 'Hola',
    example: 'Hello, how are you?',
    mastered: false,
    audioUrl: '/audio/hello.mp3' // Example audio URL
  });

  const playAudio = () => {
    if (currentWord.audioUrl) {
      const audio = new Audio(currentWord.audioUrl);
      audio.play();
    }
  };

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Pronunciation Practice
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h4">{currentWord.word}</Typography>
            <Typography>{currentWord.translation}</Typography>
            <Button 
              variant="contained" 
              onClick={playAudio} 
              sx={{ mt: 2, mr: 2 }}
            >
              Play Pronunciation
            </Button>
            <Button variant="outlined" sx={{ mt: 2 }}>
              Record Your Voice
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}