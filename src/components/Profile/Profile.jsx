import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <section className="sections-paddings">
      <div className="container">
        <div className={css.profileContainer}>
          <div className={css.avaDescrContainer}>
            <img className={css.profileImg} src={image} alt="User avatar" />
            <p className={css.profileTitle}>{name}</p>
            <p className={css.profileText}>{tag}</p>
            <p className={css.profileText}>{location}</p>
          </div>

          <ul className={css.profileStatList}>
            <li className={css.profileStatItem}>
              <span className={css.profileStatTitle}>Followers</span>
              <span className={css.profileStatText}>{followers}</span>
            </li>

            <li className={css.profileStatItem}>
              <span className={css.profileStatTitle}>Views</span>
              <span className={css.profileStatText}>{views}</span>
            </li>

            <li className={css.profileStatItem}>
              <span className={css.profileStatTitle}>Likes</span>
              <span className={css.profileStatText}>{likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
