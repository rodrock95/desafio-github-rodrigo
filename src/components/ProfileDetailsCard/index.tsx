import { ProfileDTO } from "../../models/profile";
import "./styles.css";

type Props = {
  profile: ProfileDTO;
};

export default function ProfileDetailsCard({ profile }: Props) {
  return (
    <div className="profile-details-container mb30">
      <img src={profile.avatar_url} alt={`Foto de ${profile.name}`} />
      <h1>Perfil: {profile.url}</h1>
      <p>Seguidores: {profile.followers}</p>
      <p>Localidade: {profile.location}</p>
      <p>Nome: {profile.name}</p>
    </div>
  );
}
