import { Account, Avatars, Client, Databases, ID, Query, Storage } from 'react-native-appwrite';
// import {endpoint,platform,projectId,databaseId,userCollectionId,videoCollectionId,storageId,productsCollectionId} from '@env'
// export const appwriteConfig = {
//     endpoint: endpoint,
//     platform,
//     projectId,
//     databaseId,
//     userCollectionId,
//     videoCollectionId,
//     storageId,
//     productsCollectionId
// }

const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.stylish-com",
  projectId: "6659d49d00121ff5f189",
  databaseId: "6659d7fe00129b831183",
  userCollectionId: "665ad07200352597b6a6",
  videoCollectionId: "66217d3c8d4022fdc4a6",
  productsCollectionId: "665a0537003221ca1380",
  storageId: "6659d84f002f724e4fe5"
};


// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
  ;
const account = new Account(client);
const avatars = new Avatars(client)
const databases = new Databases(client)
const storage = new Storage(client)

export const createUser = async ({ email, password, username }) => {
  console.log(email,password,username)
  try {
    const newAccount = await account.create(ID.unique(), email, password, username)
    if (!newAccount) {
      throw Error
    }
    const avatarUrl = avatars.getInitials(username)
    await signIn({ email, password })

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        password,
        username,
        avatar: avatarUrl
      }
    )
    return newUser;
  } catch (error) {
    throw new Error(error)
  }

}
export const signIn = async ({ email, password }) => {
  try {
    const session = await account.createEmailPasswordSession(email, password)
    return session;
  } catch (error) {
    throw new Error(error)
  }

}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get()

    if (!currentAccount) {
      throw Error
    }

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal('email', currentAccount.email)]
    )
    if (!currentUser) {
      throw Error
    }
    console.log("currentUser",currentUser)
    return currentUser.documents[0]
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllProduct = async () => {
  try {
    const posts = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.productsCollectionId, [Query.orderDesc('$createdAt')])
    return posts.documents
  } catch (error) {
    throw new Error(error)
  }
}


export const searchPost = async (query) => {
  try {
    const posts = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.videoCollectionId, [Query.search('title', query)])
    return posts.documents
  } catch (error) {
    throw new Error(error)
  }
}


export const getProductByProductId = async (produtId='') => {
  try {
    const posts = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.videoCollectionId, [Query.equal('$id', produtId)])
    return posts.documents
  } catch (error) {
    throw new Error(error)
  }
}



