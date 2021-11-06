import { v2 } from 'cloudinary';
import { CLOUDINARY } from '../cloudinary/constant';
const {CLOUD_NAME ,API_KEY_CLOUDINARY,API_SECRET_CLOUDINARY}=process.env
export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): any => {
    return v2.config({
      cloud_name: "dist3rsha",
      api_key: "881563425761799",
      api_secret:"UA8M1oPrGASQCIDaGwG0HBItnp4",
    });
  },
};