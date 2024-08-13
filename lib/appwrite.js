import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.aditria.aora",
  projectId: "66ac973700077dd46ee8",
  databaseId: "66aca4ad0014142ba782",
  usersCollectionId: "66aca4c5002eba799ae8",
  videosCollectionId: "66aca509000335826b25",
  storageId: "66aca75c000b0b9e7939",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw new Error();

    await signIn(email, password);

    const avatarUrl = await avatars.getInitials(username);
    const newUser = await databases.createDocument(
      config.databaseId,
      config.usersCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log("CATCH ERROR: ", error);
    throw new Error(error);
  }
};

//SIGN IN
export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.log("CATCH ERROR: ", error);
    throw new Error(error);
  }
};
