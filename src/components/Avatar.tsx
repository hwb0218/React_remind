type AvatarProps = {
  image: string;
  badge?: boolean;
}

export default function Avatar({ image, badge }: AvatarProps) {
  return (
    <div className="avatar">
      {badge && <span className="badge">new</span>}
      <img
        src={image}
        alt="avatar"
        className="photo"
      />
    </div>
  );
}
