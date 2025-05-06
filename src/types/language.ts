export interface VocabularyWord {
    id: string;
    word: string;
    translation: string;
    example: string;
    audioUrl?: string;
    mastered: boolean;
  }
  
  export interface Lesson {
    id: string;
    title: string;
    description: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    vocabulary: VocabularyWord[];
  }