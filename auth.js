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
       return {user} // Do different verification for other providers that don't have `email_verified` 
      }
    },
    async jwt({ token }) {
      console.log(token , 'tokien in jwt');
      let userFromDB = await handleLogin(token)
      console.log(userFromDB , "user from DB");
      token.role = userFromDB.role
      token._id = userFromDB._id
      return token
    },
    session({ session, token }) {
      session.user._id = token._id;
      session.user.role = token.role;
      console.log(session , "session in session fn");
      
      return session
    },
  },
});
