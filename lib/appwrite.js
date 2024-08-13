import { Account, Client, ID } from "react-native-appwrite";

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

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
