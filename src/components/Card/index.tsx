import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileDTO } from "../../models/profile";
import * as profileService from "../../services/profile-service";
import ProfileDetailsCard from "../ProfileDetailsCard";
import "./styles.css"

type FormData = {
  username: string;
};

export default function Card() {

  const params = useParams();

  const [formData, setFormData] = useState<FormData>({
    username: ''
  
  })

  const [profile, setProfile] = useState<ProfileDTO>();

    useEffect(() => {
        profileService.findByProfile(String(params.name)).then(response =>{
            console.log(response.data.content);
            setProfile(response.data.content)
        })
    })

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value});
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    profileService.findByProfile(formData.username)
  }

  return (
    <div className="card">
      <h2>Encontre um perfil Github</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Usuário Github"
          value={formData.username}
          onChange={handleInputChange}
        />
        <div className="mb30 mt30 dflex">
          <button type="submit">Buscar</button>
        </div>
      </form>
      <section>
        {profile && <ProfileDetailsCard profile={profile} />}
      </section>
    </div>
  );
}



