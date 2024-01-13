import "./styles.css"
import { useEffect, useState } from "react";
import { ProfileDTO } from "../../../models/profile";
import * as profileService from "../../../services/profile-service"
import ProfileDetailsCard from "../../../components/ProfileDetailsCard";
import { useParams } from "react-router-dom";

export default function After(){
    
    const params = useParams();

    const [profile, setProfile] = useState<ProfileDTO>();

    useEffect(() => {
        profileService.findByProfile(String(params.name)).then(response =>{
            console.log(response.data.content);
            setProfile(response.data.content)
        })
    })
    
    return(
        <main>
            <section>
            {
                profile &&
                <ProfileDetailsCard profile = {profile}/>
            }
            </section>
      </main>
    );
}