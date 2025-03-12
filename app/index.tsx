import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Link href={{ pathname: '/details', params: { name: 'Shubham' } }} asChild>
          <Button title="Hello There" />
        </Link>
      </Container>
    </>
  );
}