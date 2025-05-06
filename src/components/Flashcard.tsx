import { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { VocabularyWord } from '../types/language';

interface FlashcardProps {
  word: VocabularyWord;
  onMastered: (id: string) => void;
}

export default function Flashcard({ word, onMastered }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Card sx={{ minHeight: 200, cursor: 'pointer' }} onClick={() => setFlipped(!flipped)}>
      <CardContent>
        <Typography variant="h4" align="center">
          {flipped ? word.translation : word.word}
        </Typography>
        {flipped && (
          <>
            <Typography align="center" sx={{ mt: 2 }}>
              {word.example}
            </Typography>
            <Button 
              variant="contained" 
              sx={{ mt: 2 }} 
              onClick={(e) => {
                e.stopPropagation();
                onMastered(word.id);
              }}
            >
              Mark as Mastered
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}