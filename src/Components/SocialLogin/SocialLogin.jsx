import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
const SocialLogin = () => {
  const { googleSignIn, githubSignIn } = useAuth();
  return (
    <div className="text-center my-2">
      <div className="divider">Continue With</div>
      <div>
        <button
          onClick={() => googleSignIn()}
          className="btn btn-primary btn-circle btn-outline mr-2 text-xl"
        >
          <FaGoogle />
        </button>
        <button
          onClick={() => githubSignIn()}
          className="btn btn-primary btn-circle btn-outline mr-2 text-xl"
        >
          <IoLogoGithub />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
