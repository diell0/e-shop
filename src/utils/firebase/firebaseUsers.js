import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

//function to login with email and password
export const createUserWithEmailAndPw = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password).catch(
    (error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          throw new Error("This email is already in use");
        case "auth/invalid-email":
          throw new Error("Provided email is invalid");
        case "auth/network-request-failed":
          throw new Error("Network error");
        default:
          console.log(error);
          throw error;
      }
    }
  );
};

export const sigInWithEmailAndPw = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password).catch((error) => {
    switch (error.code) {
      case "auth/wrong-password":
        throw new Error("Password is incorrect!");
      case "auth/user-not-found":
        throw new Error("This user does not exist!");
      case "auth/invalid-email":
        throw new Error("Email is invalid!");
      case "auth/too-many-requests":
        throw new Error(
          "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
        );
      default:
        console.log({ error });
        throw error;
    }
  });
};

export const getUserByUid = async (userId) => {
  if (userId) {
    const userDocRef = doc(db, "users", userId);
    const userSnapshot = await getDoc(userDocRef);
    return userSnapshot.data();
  }
  return {};
};

export const createUser = async (userId, newUser = {}) => {
  const currDoc = doc(db, "users", userId);
  try {
    await setDoc(currDoc, newUser);
  } catch (error) {
    console.error("Error while saving in users", error);
  }
};
