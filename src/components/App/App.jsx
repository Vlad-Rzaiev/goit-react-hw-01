import Section from '../Section/Section';
import Container from '../Container/Container';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import './App.module.css';
import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

export default function App() {
  return (
    <Section>
      <Container>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />
      </Container>
    </Section>
  );
}
