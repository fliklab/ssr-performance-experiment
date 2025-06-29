import { GetServerSideProps } from 'next';

// Feed 아이템 타입 정의
export interface FeedItem {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface HomeProps {
  feed: FeedItem[];
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch(`http://${process.env.NEXT_PUBLIC_MOCK_API_DOMAIN}/api/feed`);
  const feed = await res.json();
  return { props: { feed } };
};

const Home = ({ feed }: HomeProps) => {
  return (
    <div style={{ padding: 32 }}>
      <h1>Feed (SSR1)</h1>
      <ul>
        {feed.map(item => (
          <li key={item.id} style={{ marginBottom: 16 }}>
            <img src={item.image} alt={item.title} width={120} />
            <div>{item.title}</div>
            <div>{item.price.toLocaleString()}원</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
