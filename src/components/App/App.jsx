import Profile from '../Profile/Profile';
import './App.module.css';
import userData from '../../userData.json';

export default function App() {
  const user = userData[0];

  return (
    <>
      <section className="sections-paddings">
        <div className="container">
          <Profile
            key={user.tag}
            name={user.username}
            tag={user.tag}
            location={user.location}
            image={user.avatar}
            stats={user.stats}
          />
        </div>
      </section>
    </>
  );
}
