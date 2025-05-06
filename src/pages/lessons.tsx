import { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Navbar from '../components/Navbar';

// Define the Lesson type
type Lesson = {
  id: string;
  title: string;
  description: string;
  level: string;
  vocabulary: {
    id: string;
    word: string;
    translation: string;
    example: string;
    mastered: boolean;
  }[];
};

const sampleLessons: Lesson[] = [
  {
    id: '1',
    title: 'Basic Greetings',
    description: 'Learn common greetings and introductions',
    level: 'beginner',
    vocabulary: [
      { id: '1', word: 'Hello', translation: 'Hola', example: 'Hello, how are you?', mastered: false }
    ]
  }
];

export default function Lessons() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Interactive Lessons
        </Typography>
        <Grid container spacing={3}>
          {sampleLessons.map((lesson) => (
            <Grid item xs={12} md={4} key={lesson.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{lesson.title}</Typography>
                  <Typography>{lesson.description}</Typography>
                  <Typography color="text.secondary">{lesson.level}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}