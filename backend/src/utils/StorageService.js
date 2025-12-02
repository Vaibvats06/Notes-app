import ImageKit from "imagekit";
import dotenv from "dotenv";
dotenv.config();

  const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT_URL,
});


export async function fileUpload(file, fileName) {
  try {
    const response = await imagekit.upload({
      file: file,    
      fileName: fileName,
    });
    return response;    
  } catch (error) {
    console.error("ImageKit upload error:", error);
    throw error;
  }
}

export default imagekit; 
