import connectDB from "@/lib/DataBase/connectDB";
import { userModal } from "@/lib/Modals/UserModal";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

async function handleLogin(obj) {
  await connectDB();
  const user = await userModal.findOne({ email: obj.email });
  if (user) {
    return user;
  } else {
    let newUser = await userModal(obj);
    newUser = await newUser.save();
    return newUser;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
       console.log(account , "account in sign in");
       console.log(profile , "profile in sign in");
       let userObj = {
        firstName : profile.given_name,
        lastName : profile.family_name,
        email : profile.email,
        googleId : profile.id,
        profileImage : profile.picture,
       }
       let user = await handleLogin(userObj) 
       return user // Do different verification for other providers that don't have `email_verified`
       
      }
    },
    jwt({ token, user }) {
      console.log(token , 'tokien in jwt');
      console.log(user , 'user in jwt');
      
      if (user) { // User is available during sign-in
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      return session
    },
  },
});
