import Desktop from "../imports/Desktop25";

export default function Home({ onCartClick }: { onCartClick?: () => void }) {
  return <Desktop onCartClick={onCartClick} />;
}