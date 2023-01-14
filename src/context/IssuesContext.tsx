import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface ProfileType {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company?: string;
  followers: number;
  html_url: string;
}

interface IssuesContextType {
  profile?: ProfileType;
}

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [profile, setProfile] = useState<ProfileType>();

  const fetchProfile = async () => {
    const response = await api.get("/users/matheusmagnon");
    // setProfile(() => {

    // });

    setProfile(response.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <IssuesContext.Provider value={{ profile }}>
      {children}
    </IssuesContext.Provider>
  );
}
