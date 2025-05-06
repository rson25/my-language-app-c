import { useState } from 'react';

interface VocabularyWord {
  id: string;
  word: string;
  translation: string;
  example: string;
  mastered: boolean;
}
import { Container, Typography, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import Flashcard from '../components/Flashcard';

export default function Vocabulary() {
  const [words, setWords] = useState<VocabularyWord[]>([
    { id: '1', word: 'Hello', translation: 'Hola', example: 'Hello, how are you?', mastered: false }
  ]);

  const handleMastered = (id: string) => {
    setWords(words.map(word => 
      word.id === id ? { ...word, mastered: true } : word
    ));
  };

  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Vocabulary Review
        </Typography>
        <Grid container spacing={3}>
          {words.map((word) => (
            <Grid item xs={12} md={4} key={word.id}>
              <Flashcard word={word} onMastered={handleMastered} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}