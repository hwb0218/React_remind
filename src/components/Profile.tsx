import Avatar from './Avatar';

type ProfileProps = {
  image: string;
  name: string;
  title: string;
  badge?: boolean;
}

export default function Profile({
  image, name, title, badge,
}: ProfileProps) {
  return (
    <div className="profile">
      <Avatar image={image} badge={badge} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
