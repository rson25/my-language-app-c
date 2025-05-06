import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LanguageMaster
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/lessons" passHref>
          <Button color="inherit">Lessons</Button>
        </Link>
        <Link href="/vocabulary" passHref>
          <Button color="inherit">Vocabulary</Button>
        </Link>
        <Link href="/pronunciation" passHref>
          <Button color="inherit">Pronunciation</Button>
        </Link>
        <Link href="/progress" passHref>
          <Button color="inherit">Progress</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}